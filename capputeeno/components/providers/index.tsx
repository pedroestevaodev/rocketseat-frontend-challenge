import { ChildrenProps } from "@/types/next";
import { FilterContextProvider } from "@/contexts/filter-context";
import { GlobalStyle } from "@/styles/globals";
import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import { PaginationContextProvider } from "@/contexts/pagination-context";
import { StyledComponentsRegistry } from "./styled-components-provider";

const Providers = ({ children }: ChildrenProps) => {
	return (
		<QueryProvider>
			<FilterContextProvider>
				<PaginationContextProvider>
					<ThemeProvider>
						<GlobalStyle />
						<StyledComponentsRegistry>
							{children}
						</StyledComponentsRegistry>
					</ThemeProvider>
				</PaginationContextProvider>
			</FilterContextProvider>
		</QueryProvider>
	);
};

export { Providers };
