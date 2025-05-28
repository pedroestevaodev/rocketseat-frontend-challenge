import {
	PaginationButtonProps,
	PaginationContainerProps,
} from "@/types/components";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const PaginationContainer = styled.div<PaginationContainerProps>`
	${({ $isControl }) => css`
		display: flex;
		align-items: center;
		gap: ${$isControl ? "0.125rem" : "0.25rem"};
	`}
`;

export const PaginationButton = styled.button<PaginationButtonProps>`
	${({ $isActive, $left, $right }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${$isActive ? "var(--shape-background)" : "var(--shape-4)"};
		border: ${$isActive ? "1px solid var(--orange-low)" : "none"};
		border-radius: var(--border-radius);
		box-shadow: 0px 4px 20px 0px rgba(149, 149, 149, 0.10);
		color: ${$isActive ? "var(--orange-low)" : "var(--text-placeholder)"};
		font-weight: ${$isActive ? "600" : "400"};
		line-height: normal;
		width: 2rem;
		height: 2rem;
		transition: all 0.2s ease-in-out;

		${$left && "svg { transform: rotate(90deg); }"}
		${$right && "svg { transform: rotate(-90deg); }"}

		&:hover {
			background-color: ${$isActive
				? "var(--primary-dark)"
				: "var(--secondary-dark)"};
		}
	`}
`;
