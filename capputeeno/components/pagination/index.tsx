import { PaginationProps } from "@/types/components";
import { PaginationButton, PaginationContainer, Wrapper } from "./styles";
import { PRODUCTS_PAGINATION_MAX_BUTTONS, PRODUCTS_PAGINATION_START_PAGE } from "@/lib/constants";
import { memo, useMemo } from "react";
import { ArrowIcon } from "../icons/arrow-icon";

const Pagination = memo(
	({ currentPage, totalPages, onPageChange }: PaginationProps) => {
		const pageNumbers = useMemo(() => {
			const pages: number[] = [];
			const maxPageButtons = PRODUCTS_PAGINATION_MAX_BUTTONS;

			let startPage = Math.max(
				PRODUCTS_PAGINATION_START_PAGE,
				currentPage - Math.floor(maxPageButtons / 2),
			);
			const endPage = Math.min(
				totalPages - 1,
				startPage + maxPageButtons - 1,
			);

			if (endPage - startPage + 1 < maxPageButtons) {
				startPage = Math.max(PRODUCTS_PAGINATION_START_PAGE, endPage - maxPageButtons + 1);
			}

			for (let i = startPage; i <= endPage; i++) {
				pages.push(i);
			}
			return pages;
		}, [currentPage, totalPages]);

		const handleClick = (page: number) => () => {
			onPageChange(page);
		};

		return (
			<Wrapper>
				<PaginationContainer>
					{pageNumbers.map((page) => (
						<PaginationButton
							key={page}
							onClick={handleClick(page)}
							className={`px-4 py-2 rounded-lg shadow-sm transition duration-200
                        ${
							page === currentPage
								? "bg-blue-600 text-white font-bold"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
						}`}
							$isActive={page === currentPage}
							aria-label={`Página ${page}`}
							aria-current={
								page === currentPage ? "page" : undefined
							}
						>
							{page}
						</PaginationButton>
					))}
				</PaginationContainer>
				<PaginationContainer $isControl>
					<PaginationButton
						$left
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === PRODUCTS_PAGINATION_START_PAGE}
						className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition duration-200"
					>
						<ArrowIcon />
					</PaginationButton>
					<PaginationButton
						$right
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages - 1}
						className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition duration-200"
					>
						<ArrowIcon />
					</PaginationButton>
				</PaginationContainer>
			</Wrapper>
		);
	},
);

Pagination.displayName = "Pagination";

export { Pagination };
