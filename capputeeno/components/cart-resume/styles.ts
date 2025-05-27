"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	position: sticky;
	top: 90px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 3rem;
	background-color: var(--shape-1);
	border-radius: var(--border-radius);
	margin: 1.5rem 0 2.5rem 0;
	width: 100%;
	max-width: 350px;
	max-height: 800px;
	padding: 1rem 1.5rem;

	@media (max-width: ${({ theme }) => theme.smallBreakpoint}) {
		margin-top: 0rem;
	}
	@media (max-width: ${({ theme }) => theme.largeBreakpoint}) {
		max-width: 100%;
	}
`;

export const ContentInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InfoTitle = styled.h3`
	color: var(--text-body);
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 1.813rem;
	text-transform: uppercase;
`;

export const InfoResume = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	margin-bottom: 2.5rem;
`;

export const ResumeItem = styled.div<{ $isBold?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	${({ $isBold }) => css`
		${$isBold && "span { font-weight: 600; }"}
	`}
`;

export const InfoLine = styled.div`
	display: block;
	background-color: var(--shape-2);
	width: 100%;
	height: 1px;
	margin-top: 0.75rem;
	margin-bottom: -0.25rem;
`;

export const InfoButton = styled.button`
	background-color: var(--green);
	border: none;
	border-radius: var(--border-radius);
	color: var(--shape-1);
	font-weight: 500;
	padding: 0.6rem;
	text-transform: uppercase;
	transition: all 0.2s ease-in-out;

	&:hover {
		opacity: 0.75;
	}
`;

export const ContentHelp = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const HelpItem = styled(Link)`
	color: var(--text-placeholder);
	font-size: 0.875rem;
	font-weight: 500;
	text-decoration: underline;
	text-transform: uppercase;
	transition: all 0.2s ease-in-out;

	&:hover {
		color: var(--text-body);
	}
`;
