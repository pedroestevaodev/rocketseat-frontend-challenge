"use client";

import { useFilter } from "@/contexts/filter-context";
import { ProductsFetchResponse } from "@/types/products";
import { mountQuery } from "@/utils/graphql-filters";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
	return axios.post(API_URL, { query });
};

const useProducts = () => {
	const { type, priority, search } = useFilter();
	const searchDeferred = useDeferredValue(search);
	const query = mountQuery(type, priority);

	const { data, isLoading, isError } = useQuery({
		queryFn: () => fetcher(query),
		queryKey: ["products", type, priority],
		staleTime: 1000 * 60 * 1,
	});

	const products = data?.data?.data?.allProducts || [];
	const filteredProducts = products.filter((product) =>
		product.name.toLowerCase().includes(searchDeferred.toLowerCase()),
	);

	return {
		data: filteredProducts,
		isLoading,
		isError,
	};
};

export { useProducts };
