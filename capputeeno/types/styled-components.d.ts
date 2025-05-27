import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		largeBreakpoint: string;
		mediumBreakpoint: string;
		smallBreakpoint: string;
	};
};
