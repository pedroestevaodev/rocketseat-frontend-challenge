"use client";

import styled from "styled-components";
import { Wrapper as ByTypeWrapper } from "./filter-by-type/styles";

export const Wrapper = styled.div`
	display: block;
    height: fit-content;
    width: 100%;
	padding: 2rem 0;
	z-index: 2;

	@media (max-width: ${({ theme }) => theme.smallBreakpoint}) {
		${ByTypeWrapper} {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}
`;
