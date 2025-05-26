"use client";

import { ChildrenProps } from "@/types/next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = ({ children }: ChildrenProps) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

export { QueryProvider };
