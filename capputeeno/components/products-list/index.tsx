"use client";

import { useProducts } from "@/hooks/use-products";
import { Wrapper } from "./styles";

const ProductsList = () => {
	const { data } = useProducts();

	console.log("Products data:", data);

	return (
		<Wrapper>
			<h1>Products List</h1>
			<p>This is where the products will be displayed.</p>
			{/* Add product components or other content here */}
			{/* Example: <ProductCard product={product} /> */}
			{/* You can map through an array of products and render them here */}
		</Wrapper>
	);
};

export { ProductsList };
