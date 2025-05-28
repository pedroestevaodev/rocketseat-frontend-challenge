"use client";

import {
	PRODUCTS_PAGINATION_START_PAGE,
	PRODUCTS_PER_PAGE,
} from "@/lib/constants";
import { PaginationContextProps } from "@/types/contexts";
import { ChildrenProps } from "@/types/next";
import { createContext, useCallback, useContext, useState } from "react";

const PaginationContext = createContext<PaginationContextProps | undefined>(
	undefined,
);

const PaginationContextProvider = ({ children }: ChildrenProps) => {
	const [page, setPage] = useState<number>(PRODUCTS_PAGINATION_START_PAGE);
	const perPage = PRODUCTS_PER_PAGE;

	const memoizedSetPage = useCallback((newPage: number) => {
		setPage(newPage);
	}, []);

	const contextValue: PaginationContextProps = {
		page,
		setPage: memoizedSetPage,
		perPage,
	};

	return (
		<PaginationContext.Provider value={contextValue}>
			{children}
		</PaginationContext.Provider>
	);
};

const usePaginationContext = () => {
	const context = useContext(PaginationContext);

	if (context === undefined) {
		throw new Error(
			"usePaginationContext must be used within a PaginationProvider",
		);
	}

	return context;
};

export { PaginationContextProvider, usePaginationContext };
