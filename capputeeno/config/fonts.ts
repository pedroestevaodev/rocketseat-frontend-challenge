import { Saira, Saira_Stencil_One } from "next/font/google";

export const saira = Saira({
	weight: ["300", "400", "500", "600"],
	variable: "--font-saira",
	subsets: ["latin"],
});

export const sairaStencilOne = Saira_Stencil_One({
	weight: ["400"],
	variable: "--font-saira-stencil-one",
	subsets: ["latin"],
});
