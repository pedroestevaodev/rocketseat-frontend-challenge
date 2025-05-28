"use client";

import { sairaStencilOne } from "@/config/fonts";
import { Wrapper, Logo, Group } from "./styles";
import { SearchInput } from "../search-input";
import { Container } from "@/styles/globals";
import { CartButton } from "../cart-button";
import { useFilter } from "@/contexts/filter-context";

const Header = () => {
	const { setSearch, search } = useFilter();

	return (
		<Wrapper>
			<Container>
				<Logo href="/" className={sairaStencilOne.className}>
					Capputeeno
				</Logo>
				<Group>
					<SearchInput
						type="text"
						name="search-input"
						id="search-input"
						placeholder="Procurando por algo específico?"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<CartButton />
				</Group>
			</Container>
		</Wrapper>
	);
};

export { Header };
