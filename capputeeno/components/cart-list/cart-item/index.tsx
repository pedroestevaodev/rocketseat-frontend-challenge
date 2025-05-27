"use client";

import { TrashIcon } from "@/components/icons/trash-icon";
import {
	CartContentFooter,
	CartContentHeader,
	CartItemContent,
	CartItemDelete,
	CartItemDescription,
	CartItemImage,
	CartItemPrice,
	CartItemSelect,
	CartItemTitle,
	Wrapper,
} from "./style";
import { CartItemProps } from "@/types/components";
import { formatPriceBRL } from "@/utils/format-prices";

const CartItem = ({ product, handleUpdateQuantity, handleDelete }: CartItemProps) => {
	const productPrice = formatPriceBRL(product.price_in_cents);

	return (
		<Wrapper>
			<CartItemImage src={product.image_url} width={256} height={256} alt={product.name} />
			<CartItemContent>
				<CartContentHeader>
					<CartItemTitle>{product.name}</CartItemTitle>
					<CartItemDelete onClick={() => handleDelete(product.id)} aria-label="Remover produto do carrinho">
						<TrashIcon />
					</CartItemDelete>
				</CartContentHeader>
				<CartItemDescription>{product.description}</CartItemDescription>
				<CartContentFooter>
					<CartItemSelect value={product.quantity} onChange={(e) => handleUpdateQuantity(product.id, Number(e.target.value))}>
						{Array.from({ length: product.quantity > 5 ? product.quantity : 8 }, (_, index) => (
							<option key={index} value={index + 1}>
								{index + 1}
							</option>
						))}
					</CartItemSelect>
					<CartItemPrice>{productPrice}</CartItemPrice>
				</CartContentFooter>
			</CartItemContent>
		</Wrapper>
	);
};

export { CartItem };
