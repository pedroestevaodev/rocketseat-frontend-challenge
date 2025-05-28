"use client";

import { Container } from "@/styles/globals";
import { FilterByPriority } from "./filter-by-priority";
import { FilterByType } from "./filter-by-type";
import { Group, Wrapper } from "./styles";
import { Pagination } from "../pagination";
import { useProducts } from "@/hooks/use-products";
import { PRODUCTS_PAGINATION_START_PAGE } from "@/lib/constants";
import { usePaginationContext } from "@/contexts/pagination-context";

const FilterBar = () => {
	const { isLoading, totalPages } = useProducts();
	const { page, setPage } = usePaginationContext();

	const handlePageChange = (newPage: number) => {
		if (newPage >= PRODUCTS_PAGINATION_START_PAGE && newPage < totalPages) {
			setPage(newPage);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	return (
		<Wrapper>
			<Container>
				<Group>
					<FilterByType />
					<FilterByPriority />
				</Group>

				{!isLoading && totalPages > 1 && (
					<Pagination
						currentPage={page}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				)}
			</Container>
		</Wrapper>
	);
};

export { FilterBar };
