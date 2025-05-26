"use client";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { Button, CartCount, Wrapper } from "./styles";
import { CartIcon } from "../icons/cart-icon";

const CartButton = () => {
	const { value } = useLocalStorage("cart-items");

	const cartCount = Array.isArray(value) ? value.length : 0;

	return (
		<Wrapper>
			<Button type="button">
				<CartIcon />
			</Button>
			{cartCount > 0 && <CartCount>{cartCount}</CartCount>}
		</Wrapper>
	);
};

export { CartButton };
