"use client";

import { useProducts } from "@/hooks/use-products";
import { Wrapper } from "./styles";
import { ProductCard } from "./product-card";
import { Container } from "@/styles/globals";

const ProductsList = () => {
	const { data } = useProducts();

	return (
		<Container>
			<Wrapper>
				{data?.map((product) => (
					<ProductCard key={product.id} image={product.image_url} title={product.name} price={product.price_in_cents} />
				))}
				{!data && <p>Loading products...</p>}
				{data && data.length === 0 && <p>No products found.</p>}
			</Wrapper>
		</Container>
	);
};

export { ProductsList };
