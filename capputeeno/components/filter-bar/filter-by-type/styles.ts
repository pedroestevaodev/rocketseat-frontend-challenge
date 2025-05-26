"use client";

import { FilterItemProps } from "@/types/components";
import styled, { css } from "styled-components";

const ItemModifiers = {
	isSelected: () => css`
		border-bottom: 4px solid var(--orange-low);
		color: var(--text-body);
		font-weight: 600;
	`,
	notSelected: () => css`
		color: var(--text-placeholder);
		font-weight: 400;
	`,
};

export const Wrapper = styled.ul`
	display: flex;
	align-items: center;
	gap: 2.5rem;
	list-style: none;
`;

export const Item = styled.li<FilterItemProps>`
	${({ selected }) => css`
		cursor: pointer;
		line-height: 1.375rem;
		text-transform: uppercase;

		${selected ? ItemModifiers.isSelected : ItemModifiers.notSelected}
	`}
`;
