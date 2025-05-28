export enum FilterTypes {
	"All",
	"SHIRT",
	"MUG",
}

export enum PriorityTypes {
	"NEWS",
	"BIGGEST_PRICE",
	"MINOR_PRICE",
	"POPULARITY",
}

export interface FilterContextProps {
	search: string;
	page: number;
	type: FilterTypes;
	priority: PriorityTypes;
	setSearch: (value: string) => void;
	setPage: (value: number) => void;
	setType: (value: FilterTypes) => void;
	setPriority: (value: PriorityTypes) => void;
}

export interface PaginationContextProps {
	page: number;
	setPage: (value: number) => void;
	perPage: number;
}
