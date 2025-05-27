export interface Product {
	id: string;
	name: string;
	description?: string;
	price_in_cents: number;
	image_url: string;
	category: string;
};

export interface ProductsFetchResponse {
	data: { allProducts: Product[] };
};

export interface ProductFetchResponse {
	data: { Product: Product };
};
