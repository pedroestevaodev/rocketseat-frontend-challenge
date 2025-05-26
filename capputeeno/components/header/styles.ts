"use client";

import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	background-color: var(--shape-1);
	padding: 1.188rem 0;
`;

export const Logo = styled(Link)`
	color: var(--logo-color);
	font-weight: 400;
	font-size: 2.5rem;
	line-height: 1;
	text-decoration: none;
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1.5rem;
	width: 100%;
`;
