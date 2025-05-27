"use client";

import { ProductFetchResponse } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
	return axios.post(API_URL, {
		query: `
		query {
			Product(id: "${productId}") {
				name
				description
				category
				price_in_cents
				image_url
			}
		}
	`,
	});
};

const useProduct = (id: string) => {
	const { data, isLoading, isError } = useQuery({
		queryFn: () => fetcher(id),
		queryKey: ["product", id],
		enabled: !!id,
		staleTime: 1000 * 60 * 5,
	});

	const product = data?.data?.data?.Product || null;

	return {
		data: product,
		isLoading,
		isError,
	};
};

export { useProduct };
