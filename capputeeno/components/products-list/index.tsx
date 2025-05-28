"use client";

import { useProducts } from "@/hooks/use-products";
import { Wrapper } from "./styles";
import { ProductCard } from "./product-card";
import { Container } from "@/styles/globals";
import { Pagination } from "../pagination";
import { PRODUCTS_PAGINATION_START_PAGE } from "@/lib/constants";
import { usePaginationContext } from "@/contexts/pagination-context";

const ProductsList = () => {
	const { data, isLoading, totalPages } = useProducts();
	const { page, setPage } = usePaginationContext();

	const handlePageChange = (newPage: number) => {
		if (newPage >= PRODUCTS_PAGINATION_START_PAGE && newPage < totalPages) {
			setPage(newPage);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<Container>
			<Wrapper>
				{data?.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						image={product.image_url}
						title={product.name}
						price={product.price_in_cents}
					/>
				))}
				{!data && <p>Loading products...</p>}
				{data && data.length === 0 && <p>No products found.</p>}
			</Wrapper>

			{!isLoading && totalPages > 1 && (
				<Pagination
					currentPage={page}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			)}
		</Container>
	);
};

export { ProductsList };
