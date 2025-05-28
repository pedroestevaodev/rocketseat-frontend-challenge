import Image from "next/image";
import styled from "styled-components";
import { Container } from "./globals";

export const Wrapper = styled.div`
	position: relative;
	display: block;

	${Container} {
		flex-direction: column;
	}
`;

export const ProductWrapper = styled.div`
	display: flex;
	gap: 2rem;
	padding-bottom: 3rem;

	@media (max-width: ${({ theme }) => theme.largeBreakpoint}) {
		flex-direction: column;
	}
`;

export const ProductImage = styled(Image)`
	width: 100%;
	max-width: 640px;
	height: auto;
	border-radius: var(--border-radius);
	object-fit: cover;

	@media (max-width: ${({ theme }) => theme.largeBreakpoint}) {
		max-width: 100%;
	}
`;

export const ProductContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;

	@media (max-width: ${({ theme }) => theme.largeBreakpoint}) {
		gap: 4rem;
	}
`;

export const ProductContentBody = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProductContentFooter = styled.div`
	display: block;
`;

export const ProductCategory = styled.span`
	margin-bottom: 0.75rem;
`;

export const ProductName = styled.h1`
	color: var(--text-body);
	font-size: 2rem;
	font-weight: 300;
	margin-bottom: 0.25rem;
`;

export const ProductInfo = styled.span`
	color: var(--text-body);
	font-size: 0.75rem;
	margin-bottom: 3.625rem;
`;

export const ProductDescription = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const ProductDescriptionTitle = styled.span`
	color: var(--text-placeholder);
	font-weight: 500;
	text-transform: uppercase;
`;

export const ProductDescriptionContent = styled.p`
	font-size: 0.875rem;
`;

export const ProductPrice = styled.span`
	color: var(--text-title);
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 1.5rem;
`;

export const ProductBuyButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	background-color: var(--brand-blue);
	border: none;
	border-radius: var(--border-radius);
	color: var(--shape-background);
	padding: 0.625rem;
	width: 100%;

	svg {
		color: var(--shape-background);
	}
`;
