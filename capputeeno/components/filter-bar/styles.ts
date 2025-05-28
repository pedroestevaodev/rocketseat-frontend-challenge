import styled from "styled-components";
import { Wrapper as ByTypeWrapper } from "./filter-by-type/styles";
import { Wrapper as PaginationWrapper } from "../pagination/styles";
import { Container } from "@/styles/globals";

export const Wrapper = styled.div`
	display: block;
    height: fit-content;
    width: 100%;
	padding: 2rem 0;
	z-index: 2;

	${Container} {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	${PaginationWrapper} {
		align-self: flex-end;

		@media (max-width: ${({ theme }) => theme.smallBreakpoint}) {
			align-self: center;
		}
	}

	@media (max-width: ${({ theme }) => theme.smallBreakpoint}) {
		${ByTypeWrapper} {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	width: 100%;

	@media (max-width: ${({ theme }) => theme.smallBreakpoint}) {
		align-items: flex-start;
	}
`;
