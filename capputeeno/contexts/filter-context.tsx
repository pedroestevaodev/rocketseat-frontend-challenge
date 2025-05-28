"use client";

import {
	FilterContextProps,
	FilterTypes,
	PriorityTypes,
} from "@/types/contexts";
import { ChildrenProps } from "@/types/next";
import { createContext, useContext, useState } from "react";

const defaultFilter: FilterContextProps = {
	search: "",
	page: 0,
	type: FilterTypes.All,
	priority: PriorityTypes.POPULARITY,
	setSearch: () => {},
	setPage: () => {},
	setType: () => {},
	setPriority: () => {},
};

const FilterContext = createContext<FilterContextProps>(defaultFilter);

const FilterContextProvider = ({ children }: ChildrenProps) => {
	const [filter, setFilter] = useState<FilterContextProps>(defaultFilter);

	const setSearch = (search: string) =>
		setFilter((prev) => ({ ...prev, search }));
	const setPage = (page: number) => setFilter((prev) => ({ ...prev, page }));
	const setType = (type: FilterTypes) =>
		setFilter((prev) => ({ ...prev, type }));
	const setPriority = (priority: PriorityTypes) =>
		setFilter((prev) => ({ ...prev, priority }));

	const contextValue: FilterContextProps = {
		search: filter.search,
		page: filter.page,
		type: filter.type,
		priority: filter.priority,
		setSearch,
		setPage,
		setType,
		setPriority,
	};

	return (
		<FilterContext.Provider value={contextValue}>
			{children}
		</FilterContext.Provider>
	);
};

const useFilter = () => {
	const context = useContext(FilterContext);

	if (context === undefined) {
		throw new Error(
			"useFilter must be used within a FilterContextProvider",
		);
	}

	return context;
};

export { FilterContextProvider, useFilter };
