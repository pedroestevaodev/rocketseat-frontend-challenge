"use client";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #F0F0F5;
		--blue-low: #DDE9F0;
		--brand-blue: #115D8C;
		--brand-orange: #F25D27;
		--exclude: #DE3838;
		--green: #51B853;
		--green-low: #DCF5DD;
		--logo-color: #5D5D6D;
		--orange-low: #FFA585;
		--shape-1: #FFFFFF;
		--shape-2: #DCE2E5;
		--shape-3: #F3F5F6;
		--shape-dark: #09090A;
		--shape-light: #E9E9F0;
		--shape-background: #F5F5FA;
		--text-title: #09090A;
		--text-body: #41414D;
		--text-placeholder: #737380;
		--text-support: #617480;
		--yellow: #EFB866;

		--max-width: 1168px;
		--border-radius: 8px;

		--header-height: 80px;

		@media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
			--header-height: 125px;
		}
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body {
		background-color: var(--background);
		color: var(--text-body);
		min-height: 100vh;
		-webkit-font-smoothing: antialiased;
    	-moz-osx-font-smoothing: grayscale;
	}

	html,
	body {
		max-width: 100vw;
		overflow-x: hidden;
	}

	body, input, textarea, button {
        font-family: var(--font-saira), sans-serif;
		font-size: 1rem;
        font-weight: 400;
		line-height: 1.5;
    }

	h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

	button {
        cursor: pointer;
    }

	[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 0 1.5rem;

	@media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
		padding: 0 1rem;
	}
`;

export const ContentBase = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
`;

export const MainBase = styled.main`
	position: relative;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	min-height: 100vh;
	padding-top: var(--header-height);
`;
