"use client";

import { BackButton } from "@/components/back-button";
import { CartIcon } from "@/components/icons/cart-icon";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useProduct } from "@/hooks/use-product";
import { Container, MainBase } from "@/styles/globals";
import {
	ProductBuyButton,
	ProductBuyButtonContent,
	ProductCategory,
	ProductContent,
	ProductContentBody,
	ProductContentFooter,
	ProductDescription,
	ProductDescriptionContent,
	ProductDescriptionTitle,
	ProductImage,
	ProductInfo,
	ProductName,
	ProductPrice,
	ProductWrapper,
	Wrapper,
} from "@/styles/products-page";
import { formatPriceBRL } from "@/utils/format-prices";
import { formatCategoryName } from "@/utils/format-strings";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";

const ProductPage = () => {
	const search = useSearchParams();
	const id = search.get("id");

	const { data } = useProduct(id ?? "");
	const { value, updateLocalStorage } = useLocalStorage("cart-items");

	const [isHovering, setIsHovering] = useState<boolean>(false);
	const [showSuccessMessage, setShowSuccessMessage] =
		useState<boolean>(false);

	const successTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const isProductInCart = useMemo(() => {
		if (!id || !Array.isArray(value)) {
			return false;
		}
		return value.some((item) => item.id === id);
	}, [id, value]);

	useEffect(() => {
		const timeout = successTimeoutRef.current;
		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
		};
	}, [id]);

	const buttonText = useMemo(() => {
		if (showSuccessMessage) {
			return "Adicionado ao carrinho com sucesso!";
		}
		if (isProductInCart) {
			return isHovering
				? "Adicionar novamente?"
				: "Adicionado ao carrinho";
		}
		return "Adicionar ao carrinho";
	}, [isProductInCart, isHovering, showSuccessMessage]);

	if (!data) {
		return (
			<p className="text-center text-gray-600 mt-10">
				Carregando produto...
			</p>
		);
	}

	const formattedCategory = formatCategoryName(data.category);
	const formattedPrice = formatPriceBRL(data.price_in_cents);

	const handleAddToCart = () => {
		const currentCart = Array.isArray(value) ? [...value] : [];

		const existingProductIndex = currentCart.findIndex(
			(item: { id: string }) => item.id === id,
		);

		if (existingProductIndex !== -1) {
			currentCart[existingProductIndex].quantity += 1;
		} else {
			currentCart.push({ ...data, id, quantity: 1 });
		}

		updateLocalStorage(currentCart);

		setShowSuccessMessage(true);

		if (successTimeoutRef.current) {
			clearTimeout(successTimeoutRef.current);
		}

		successTimeoutRef.current = setTimeout(() => {
			setShowSuccessMessage(false);
		}, 5000);
	};

	return (
		<MainBase>
			<Wrapper>
				<Container>
					<BackButton />
					<ProductWrapper>
						<ProductImage
							src={data.image_url}
							width={640}
							height={580}
							alt={data.name}
						/>
						<ProductContent>
							<ProductContentBody>
								<ProductCategory>
									{formattedCategory}
								</ProductCategory>
								<ProductName>{data.name}</ProductName>
								<ProductPrice>{formattedPrice}</ProductPrice>
								<ProductInfo>
									*Frete de R$40,00 para todo o Brasil. Grátis
									para compras acima de R$900,00.
								</ProductInfo>
								<ProductDescription>
									<ProductDescriptionTitle>
										Descrição
									</ProductDescriptionTitle>
									<ProductDescriptionContent>
										{data.description}
									</ProductDescriptionContent>
								</ProductDescription>
							</ProductContentBody>
							<ProductContentFooter>
								<ProductBuyButton
									type="button"
									$isInCart={isProductInCart}
									$isSuccess={showSuccessMessage}
									onClick={handleAddToCart}
									onMouseEnter={() => setIsHovering(true)}
									onMouseLeave={() => setIsHovering(false)}
									aria-label="Adicionar ao carrinho"
								>
									<ProductBuyButtonContent>
										<CartIcon />
										{buttonText}
									</ProductBuyButtonContent>
								</ProductBuyButton>
							</ProductContentFooter>
						</ProductContent>
					</ProductWrapper>
				</Container>
			</Wrapper>
		</MainBase>
	);
};

export default ProductPage;
