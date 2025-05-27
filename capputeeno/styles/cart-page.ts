"use client";

import styled from "styled-components";
import { Container } from "./globals";

export const Wrapper = styled.div`
	position: relative;
	display: block;

	${Container} {
		align-items: inherit;
		gap: 2rem;

		@media (max-width: ${({ theme }) => theme.largeBreakpoint}) {
			flex-direction: column;
		}
	}
`;

export const CartContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;
