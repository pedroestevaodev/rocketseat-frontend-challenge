"use client";

import { LOCAL_STORAGE_EVENT_NAME } from "@/lib/constants";
import { useCallback, useEffect, useState } from "react";

const useLocalStorage = <T>(item: string) => {
	const readValue = useCallback((): T | undefined => {
		if (typeof window === "undefined") return undefined;

		try {
			const itemValue = localStorage.getItem(item);

			if (itemValue === null) {
				return undefined;
			}

			return JSON.parse(itemValue) as T;
		} catch (error) {
			console.warn(
				`Erro ao fazer parse do localStorage para o item "${item}":`,
				error,
			);
			return undefined;
		}
	}, [item]);

	const [value, setValue] = useState<T | undefined>(readValue);

	const updateLocalStorage = useCallback(
		(newValue: T) => {
			setValue(newValue);
			if (typeof window !== "undefined") {
				try {
					localStorage.setItem(item, JSON.stringify(newValue));
					window.dispatchEvent(
						new CustomEvent(LOCAL_STORAGE_EVENT_NAME, {
							detail: { key: item, value: newValue },
						}),
					);
				} catch (error) {
					console.error(
						`Erro ao salvar no localStorage para a chave "${item}":`,
						error,
					);
				}
			}
		},
		[item],
	);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === item) {
				setValue(readValue());
			}
		};

		const handleCustomStorageChange = (event: Event) => {
			const customEvent = event as CustomEvent;
			if (customEvent.detail && customEvent.detail.key === item) {
				setValue(customEvent.detail.value);
			}
		};

		window.addEventListener("storage", handleStorageChange);
		window.addEventListener(
			LOCAL_STORAGE_EVENT_NAME,
			handleCustomStorageChange,
		);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
			window.removeEventListener(
				LOCAL_STORAGE_EVENT_NAME,
				handleCustomStorageChange,
			);
		};
	}, [item, readValue]);

	return {
		value,
		updateLocalStorage,
	};
};

export { useLocalStorage };
