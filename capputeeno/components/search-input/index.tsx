import { Wrapper, Input } from "./styles";
import { SearchInputProps } from "@/types/components";

const SearchIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				cx="11.059"
				cy="11.059"
				r="7.062"
				stroke="#737380"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
			/>
			<path
				stroke="#737380"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="m20.003 20.003-3.951-3.951"
			/>
		</svg>
	);
};

const SearchInput = (props: SearchInputProps) => {
	return (
		<Wrapper>
			<Input {...props} onChange={(e) => props.handleChange(e.target.value)} />
			<SearchIcon />
		</Wrapper>
	);
};

export { SearchInput };
