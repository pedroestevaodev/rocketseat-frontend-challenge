import { ProductInCart } from "@/types/products";

export const formatPriceBRL = (value: number): string => {
	return new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(value / 100);
};

export const calculateTotalPrice = (value: ProductInCart[]) => {
	if (!Array.isArray(value) || value.length === 0) {
		return 0;
	}

	return value.reduce((total, item) => {
		return (total += item.price_in_cents * item.quantity);
	}, 0);
};
