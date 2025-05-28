import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
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
}

export interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export interface PaginationButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	$isActive?: boolean;
	$left?: boolean;
	$right?: boolean;
}

export interface PaginationContainerProps {
	$isControl?: boolean;
}
