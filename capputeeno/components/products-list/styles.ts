import styled from "styled-components";
import { Wrapper as PaginationWrapper } from "../pagination/styles";

export const Wrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(256px, 3fr));
	justify-items: center;
	gap: 2rem;
	width: 100%;

	+ ${PaginationWrapper} {
		justify-content: flex-end;
		width: 100%;
		padding: 4.5rem 0 3.5rem;

		@media (max-width: ${({ theme }) => theme.smallBreakpoint}) {
			justify-content: center;
		}
	}
`;
