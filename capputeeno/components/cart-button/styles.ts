import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Button = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	border: none;
	color: var(--text-placeholder);
	margin: 0;
	padding: 0;
	text-decoration: none;
`;

export const CartCount = styled.span`
	position: absolute;
	bottom: -0.5rem;
	right: -0.563rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--exclude);
	border-radius: 50%;
	color: #fff;
	flex-shrink: 0;
	font-size: 0.625rem;
	font-weight: 500;
	width: 1.063rem;
	height: 1.063rem;
`;
