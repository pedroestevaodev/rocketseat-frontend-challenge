import { ChildrenProps } from "@/types/next";
import { FilterContextProvider } from "@/contexts/filter-context";
import { GlobalStyle } from "@/styles/globals";
import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: ChildrenProps) => {
	return (
		<QueryProvider>
			<FilterContextProvider>
				<ThemeProvider>
					{children}
					<GlobalStyle />
				</ThemeProvider>
			</FilterContextProvider>
		</QueryProvider>
	);
};

export { Providers };
