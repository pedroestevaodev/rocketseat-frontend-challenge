"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { ChildrenProps } from "@/types/next";

const StyledComponentsRegistry = ({ children }: ChildrenProps) => {
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return <>{styles}</>;
	});

	if (typeof window !== "undefined") return <>{children}</>;

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			{children}
		</StyleSheetManager>
	);
};

export { StyledComponentsRegistry };
