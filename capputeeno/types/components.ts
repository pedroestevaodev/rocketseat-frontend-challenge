import { InputHTMLAttributes } from "react";
import { ProductInCart } from "./products";

export interface SearchInputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
}

export interface FilterItemProps {
	selected: boolean;
}

export interface ProductCardProps {
	id: string;
	image: string;
	title: string;
	price: number;
}

export interface CartItemProps {
	product: ProductInCart;
	handleUpdateQuantity: (id: string, quantity: number) => void;
	handleDelete: (id: string) => void;
};
