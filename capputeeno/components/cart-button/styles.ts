"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	border: none;
	margin: 0;
	padding: 0;
`;

export const CartCount = styled.span`
	position: absolute;
	bottom: -8px;
	right: -9px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--exclude);
	border-radius: 50%;
	color: #fff;
	flex-shrink: 0;
	font-size: 0.625rem;
	font-weight: 500;
	width: 17px;
	height: 17px;
`;
