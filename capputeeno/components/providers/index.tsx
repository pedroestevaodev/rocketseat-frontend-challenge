import { ChildrenProps } from "@/types/next";
import { FilterContextProvider } from "@/contexts/filter-context";
import { GlobalStyle } from "@/styles/globals";
import { QueryProvider } from "./query-provider";

const Providers = ({ children }: ChildrenProps) => {
	return (
		<QueryProvider>
			<FilterContextProvider>
				{children}
				<GlobalStyle />
			</FilterContextProvider>
		</QueryProvider>
	);
};

export { Providers };
