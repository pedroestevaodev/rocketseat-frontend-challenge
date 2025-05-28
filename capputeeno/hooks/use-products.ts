"use client";

import { useFilter } from "@/contexts/filter-context";
import { usePaginationContext } from "@/contexts/pagination-context";
import { API_URL } from "@/lib/constants";
import { ProductsFetchResponse } from "@/types/products";
import { mountQuery } from "@/utils/graphql-filters";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useDeferredValue } from "react";

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
	return axios.post(API_URL, { query });
};

const useProducts = () => {
	const { type, priority, search } = useFilter();
	const searchDeferred = useDeferredValue(search);

	const { page, perPage } = usePaginationContext();

	const pagination = { page, perPage };

	const query = mountQuery(type, priority, pagination);

	const { data, isLoading, isError } = useQuery({
		queryFn: () => fetcher(query),
		queryKey: ["products", type, priority, page, perPage],
		staleTime: 1000 * 60 * 1,
	});

	const products = data?.data?.data?.allProducts || [];
	const totalCount = data?.data?.data?._allProductsMeta?.count || 0;

	const totalPages = Math.ceil(totalCount / perPage);

	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(searchDeferred.toLowerCase()),
	);

	return {
		data: filteredProducts,
		isLoading,
		isError,
		totalPages,
	};
};

export { useProducts };
