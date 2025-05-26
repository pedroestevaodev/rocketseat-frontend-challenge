"use client";

import { useState } from "react";
import { Dropdown, DropdownItem, Text, Wrapper } from "./styles";
import { useFilter } from "@/contexts/filter-context";
import { PriorityTypes } from "@/types/contexts";
import { ArrowIcon } from "@/components/icons/arrow-icon";



const FilterByPriority = () => {
	const { setPriority } = useFilter();

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleOpen = () => setIsOpen((prev) => !prev);

	const handleUpdatePriority = (value: PriorityTypes) => {
		setPriority(value);
		setIsOpen(false);
	};

	return (
		<Wrapper>
			<Text onClick={handleOpen}>
				Organizar por
				<ArrowIcon />
			</Text>
			{isOpen && (
				<Dropdown>
					<DropdownItem
						onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}
					>
						Novidades
					</DropdownItem>
					<DropdownItem
						onClick={() =>
							handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)
						}
					>
						Preço: Maior - Menor
					</DropdownItem>
					<DropdownItem
						onClick={() =>
							handleUpdatePriority(PriorityTypes.MINOR_PRICE)
						}
					>
						Preço: Menor - Maior
					</DropdownItem>
					<DropdownItem
						onClick={() =>
							handleUpdatePriority(PriorityTypes.POPULARITY)
						}
					>
						Mais vendidos
					</DropdownItem>
				</Dropdown>
			)}
		</Wrapper>
	);
};

export { FilterByPriority };
