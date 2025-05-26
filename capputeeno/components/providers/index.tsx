import { ChildrenProps } from "@/types/next";
import { FilterContextProvider } from "@/contexts/filter-context";
import { GlobalStyle } from "@/styles/globals";

const Providers = ({ children }: ChildrenProps) => {
	return (
		<FilterContextProvider>
			{children}
			<GlobalStyle />
		</FilterContextProvider>
	);
};

export { Providers };
