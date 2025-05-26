import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		tabletBreakpoint: string;
		mobileBreakpoint: string;
	};
};
