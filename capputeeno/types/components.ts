import { InputHTMLAttributes } from "react";

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
	handleChange: (value: string) => void;
};

export interface FilterItemProps { selected: boolean };

export interface ProductCardProps {
	image: string;
	title: string;
	price: number;
};
