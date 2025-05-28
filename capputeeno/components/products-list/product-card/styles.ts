import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: var(--shape-background);
	backdrop-filter: blur(10px);
	border-radius: var(--border-radius);
	color: var(--text-body);
	overflow: hidden;
	max-width: 256px;
	text-decoration: none;
`;

export const ProductImage = styled(Image)`
	width: 256px;
	height: 300px;
	object-fit: cover;
`;

export const ProductContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 0.5rem;
	padding: 0.5rem 0.75rem;
	width: 100%;
`;

export const ProductName = styled.h3`
	font-weight: 300;
`;

export const ProductLine = styled.div`
	width: 100%;
	height: 1px;
	background-color: var(--shape-2);
	flex-shrink: 0;
`;

export const ProductPrice = styled.p`
	color: var(--text-title);
	font-size: 0.875rem;
	font-weight: 600;
`;
