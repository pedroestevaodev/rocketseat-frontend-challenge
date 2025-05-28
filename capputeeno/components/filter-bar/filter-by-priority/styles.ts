import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const Text = styled.button`
	display: flex;
	align-items: center;
	background-color: transparent;
	border: none;
	color: var(--text-placeholder);
	font-size: 0.875rem;
	line-height: 1.375rem;
	margin: 0rem;
	padding: 0rem;
`;

export const Dropdown = styled.ul`
	position: absolute;
	top: calc(100% + 4px);
	right: 0;
	display: flex;
	flex-direction: column;
	gap: 4px;
	background-color: var(--shape-1);
	border-radius: var(--border-radius);
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	list-style: none;
	padding: 0.75rem 1rem;
	width: 176px;
	z-index: 2;
`;

export const DropdownItem = styled.li`
	display: flex;
	align-items: center;
	color: var(--text-placeholder);
	cursor: pointer;
	font-size: 0.875rem;
	line-height: 1.375rem;

	&:hover {
		font-weight: 500;
	}
`;
