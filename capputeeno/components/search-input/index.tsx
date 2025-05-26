import { SearchIcon } from "../icons/search-icon";
import { Wrapper, Input } from "./styles";
import { SearchInputProps } from "@/types/components";

const SearchInput = (props: SearchInputProps) => {
	return (
		<Wrapper>
			<Input {...props} onChange={(e) => props.handleChange(e.target.value)} />
			<SearchIcon />
		</Wrapper>
	);
};

export { SearchInput };
