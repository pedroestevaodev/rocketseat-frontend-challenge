"use client";

import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2.5rem;

	@media (max-width: ${({ theme }) => theme.smallBreakpoint}) {
		margin-bottom: 0rem;
	}
`;

export const CartListTitle = styled.h1`
	font-size: 1.5rem;
	font-weight: 500;
	margin-bottom: 0.375rem;
	text-transform: uppercase;
`;

export const CartListInfo = styled.span`
	font-weight: 300;
`;

export const CartListContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 1.5rem;
`;
