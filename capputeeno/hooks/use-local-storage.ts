"use client";

import { useEffect, useState } from "react";

const useLocalStorage = <T>(item: string) => {
	const [value, setValue] = useState<T | undefined>(undefined);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const itemValue = localStorage.getItem(item);
		if (itemValue !== null) {
			try {
				setValue(JSON.parse(itemValue));
			} catch {
				console.warn("Erro ao fazer parse do localStorage");
			}
		}
	}, [item]);

	const updateLocalStorage = (newValue: T) => {
		setValue(newValue);
		if (typeof window !== "undefined") {
			localStorage.setItem(item, JSON.stringify(newValue));
		}
	};

	return {
		value,
		updateLocalStorage,
	};
};

export { useLocalStorage };
