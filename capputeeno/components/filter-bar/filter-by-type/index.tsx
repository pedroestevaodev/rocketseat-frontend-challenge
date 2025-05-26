"use client";

import { useFilter } from "@/contexts/filter-context";
import { Item, Wrapper } from "./styles";
import { FilterTypes } from "@/types/contexts";

const FilterByType = () => {
	const { type, setType } = useFilter();

	const handleChangeType = (value: FilterTypes) => {
		setType(value);
	};

	return (
		<Wrapper>
			<Item
				selected={type === FilterTypes.All}
				onClick={() => handleChangeType(FilterTypes.All)}
			>
				Todos os produtos
			</Item>
			<Item
				selected={type === FilterTypes.SHIRT}
				onClick={() => handleChangeType(FilterTypes.SHIRT)}
			>
				Camisetas
			</Item>
			<Item
				selected={type === FilterTypes.MUG}
				onClick={() => handleChangeType(FilterTypes.MUG)}
			>
				Canecas
			</Item>
		</Wrapper>
	);
};

export { FilterByType };
