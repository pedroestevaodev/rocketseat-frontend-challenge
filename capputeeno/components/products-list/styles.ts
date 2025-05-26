"use client";

import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(256px, 3fr));
	justify-items: center;
	gap: 2rem;
	width: 100%;
`;
