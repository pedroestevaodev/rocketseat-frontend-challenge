"use client";

import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	height: 42px;
	width: 100%;
	max-width: 352px;
	border-radius: var(--border-radius);

	svg {
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translateY(-50%);
		display: block;
		color: var(--text-placeholder);
		width: 24px;
		height: 24px;
	}
`;

export const Input = styled.input`
	display: flex;
	background-color: var(--shape-3);
	border: none;
	border-radius: var(--border-radius);
	font-size: 0.875rem;
	width: 100%;
	height: 100%;
	padding: 0.562rem 2.5rem 0.526rem 1rem;

	&::placeholder {
		color: var(--text-placeholder);
	}
`;
