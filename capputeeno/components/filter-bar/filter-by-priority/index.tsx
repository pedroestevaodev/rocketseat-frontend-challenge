"use client";

import { useState } from "react";
import { Dropdown, DropdownItem, Text, Wrapper } from "./styles";
import { useFilter } from "@/contexts/filter-context";
import { PriorityTypes } from "@/types/contexts";

const ArrowIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M8 10L12 14L16 10"
				stroke="#737380"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

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
