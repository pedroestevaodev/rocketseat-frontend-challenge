import { Container } from "@/styles/globals";
import { FilterByPriority } from "./filter-by-priority";
import { FilterByType } from "./filter-by-type";
import { Wrapper } from "./styles";

const FilterBar = () => {
	return (
		<Wrapper>
			<Container>
				<FilterByType />
				<FilterByPriority />
			</Container>
		</Wrapper>
	);
};

export { FilterBar };
