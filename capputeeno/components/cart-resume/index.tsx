"use client";

import { useLocalStorage } from "@/hooks/use-local-storage";
import {
	ContentHelp,
	ContentInfo,
	HelpItem,
	InfoButton,
	InfoResume,
	InfoTitle,
	ResumeItem,
	InfoLine,
	Wrapper,
} from "./styles";
import { ProductInCart } from "@/types/products";
import { calculateTotalPrice, formatPriceBRL } from "@/utils/format-prices";

const CartResume = () => {
	const { value } = useLocalStorage<ProductInCart[]>("cart-items");

	const deliveryFee = 4000;

	const totalProductsPrice = calculateTotalPrice(value as ProductInCart[]);
	const totalProductsPriceFormatted = formatPriceBRL(totalProductsPrice);

	const totalDelivery = formatPriceBRL(deliveryFee);

	const totalPriceFormatted = totalProductsPrice > 0 ? formatPriceBRL(
		totalProductsPrice + deliveryFee,
	) : formatPriceBRL(0);

	return (
		<Wrapper>
			<ContentInfo>
				<InfoTitle>Resumo do pedido</InfoTitle>
				<InfoResume>
					<ResumeItem>
						<span>Subtotal de produtos</span>
						<span>{totalProductsPriceFormatted}</span>
					</ResumeItem>
					<ResumeItem>
						<span>Entrega</span>
						<span>{totalDelivery}</span>
					</ResumeItem>
					<InfoLine />
					<ResumeItem $isBold>
						<span>Total</span>
						<span>{totalPriceFormatted}</span>
					</ResumeItem>
				</InfoResume>
				<InfoButton>Finalizar a compra</InfoButton>
			</ContentInfo>
			<ContentHelp>
				<HelpItem href="#">Ajuda</HelpItem>
				<HelpItem href="#">Reembolsos</HelpItem>
				<HelpItem href="#">Entregas e Frete</HelpItem>
				<HelpItem href="#">Trocas e Devoluções</HelpItem>
			</ContentHelp>
		</Wrapper>
	);
};

export { CartResume };
