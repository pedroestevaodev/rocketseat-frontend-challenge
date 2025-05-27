"use client";

import { ChildrenProps } from "@/types/next";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {
	largeBreakpoint: "991px",
	mediumBreakpoint: "767px",
	smallBreakpoint: "575px",
};

const ThemeProvider = ({ children }: ChildrenProps) => {
	return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export { ThemeProvider };
