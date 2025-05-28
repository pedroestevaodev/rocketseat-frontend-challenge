"use client";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { CartItem } from "./cart-item";
import {
	CartListContent,
	CartListInfo,
	CartListTitle,
	Wrapper,
} from "./styles";
import { ProductInCart } from "@/types/products";
import { calculateTotalPrice, formatPriceBRL } from "@/utils/format-prices";

const CartList = () => {
	const { value, updateLocalStorage } =
		useLocalStorage<ProductInCart[]>("cart-items");

	const cartCount = Array.isArray(value) ? value.length : 0;
	const cartProducts =
		cartCount === 1 ? `${cartCount} produto` : `${cartCount} produtos`;

	const totalPrice = calculateTotalPrice(value as ProductInCart[]);
	const totalPriceFormatted = formatPriceBRL(totalPrice);

	const handleUpdateQuantity = (id: string, quantity: number) => {
		if (!Array.isArray(value)) return;

		const updatedItems = value.map((item) => {
			if (item.id === id) {
				return { ...item, quantity };
			}
			return item;
		});
		updateLocalStorage(updatedItems);
	};

	const handleDelete = (id: string) => {
		if (!Array.isArray(value)) return;

		const updatedItems = value.filter((item) => item.id !== id);
		updateLocalStorage(updatedItems);
	};

	return (
		<Wrapper>
			<CartListTitle>Seu Carrinho</CartListTitle>
			<CartListInfo>
				Total ({cartProducts}) <strong>{totalPriceFormatted}</strong>
			</CartListInfo>
			<CartListContent>
				{value && value.length === 0 ? (
					<p>Seu carrinho está vazio.</p>
				) : (
					<>
						{value?.map((item) => (
							<CartItem
								key={item.id}
								product={item}
								handleUpdateQuantity={handleUpdateQuantity}
								handleDelete={handleDelete}
							/>
						))}
					</>
				)}
			</CartListContent>
		</Wrapper>
	);
};

export { CartList };
