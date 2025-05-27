"use client";

import { BackButton } from "@/components/back-button";
import { CartIcon } from "@/components/icons/cart-icon";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useProduct } from "@/hooks/use-product";
import { Container, MainBase } from "@/styles/globals";
import {
	ProductBuyButton,
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
import React from "react";

const ProductPage = () => {
	const search = useSearchParams();
	const id = search.get("id");

	const { data } = useProduct(id ?? "");
	const { value, updateLocalStorage } = useLocalStorage("cart-items");

	if (!data) {
		return "...Loading";
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
								<ProductBuyButton type="button" onClick={handleAddToCart}>
									<CartIcon />
									Adicionar ao carrinho
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
