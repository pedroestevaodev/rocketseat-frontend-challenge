import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	gap: 1rem;
	background-color: var(--shape-1);
	border-radius: var(--border-radius);
	width: 100%;

	@media (max-width: ${({ theme }) => theme.smallBreakpoint}) {
		flex-direction: column;
	}
`;

export const CartItemImage = styled(Image)`
	aspect-ratio: 5/4;
	border: none;
	border-radius: var(--border-radius) 0 0 var(--border-radius);
	width: 100%;
	max-width: 256px;
	height: auto;
	object-fit: cover;

	@media (max-width: ${({ theme }) => theme.smallBreakpoint}) {
		aspect-ratio: 16/9;
		max-width: 100%;
	}
`;

export const CartItemContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 100%;
	padding: 1rem;
`;

export const CartContentHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;

	svg {
		cursor: pointer;
		color: var(--exclude);
		transition: color 0.2s ease-in-out;
	}
`;

export const CartContentFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;
	margin-top: auto;
`;

export const CartItemTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 300;
`;

export const CartItemDelete = styled.button`
	background-color: transparent;
	border: none;
`;

export const CartItemDescription = styled.p`
	font-size: 0.75rem;
`;

export const CartItemSelect = styled.select`
	background-color: var(--shape-3);
	border: 1px solid var(--shape-2);
	border-radius: var(--border-radius);
	cursor: pointer;
	padding: 0.75rem 1rem 0.75rem 0.7rem;
`;

export const CartItemPrice = styled.span`
	font-weight: 600;
`;
