import { InputHTMLAttributes } from "react";

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
};

export interface FilterItemProps { selected: boolean };

export interface ProductCardProps {
	image: string;
	title: string;
	price: number;
};
