import { Container } from "@/styles/globals";
import Link from "next/link";
import styled from "styled-components";
import { Wrapper as SearchInputWrapper } from "../search-input/styles";

export const Wrapper = styled.header`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	background-color: var(--shape-1);
	padding: 1.188rem 0;
	width: 100%;
	z-index: 10;

	${Container} {
		@media (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}
	}
`;

export const Logo = styled(Link)`
	color: var(--logo-color);
	font-weight: 400;
	font-size: 2.5rem;
	line-height: 1;
	text-decoration: none;
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1.5rem;
	width: 100%;

	@media (max-width: ${({ theme }) => theme.mediumBreakpoint}) {
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		${SearchInputWrapper} {
			max-width: 100%;
		}
	}
`;
