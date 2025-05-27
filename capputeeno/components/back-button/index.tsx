"use client";

import { useRouter } from "next/navigation";
import { BackArrowIcon } from "../icons/back-arrow-icon";
import { Button, Wrapper } from "./styles";

const BackButton = () => {
	const router = useRouter();

	const handleNavigate = () => router.back();

	return (
		<Wrapper>
			<Button type="button" onClick={handleNavigate}>
				<BackArrowIcon />
				Voltar
			</Button>
		</Wrapper>
	);
};

export { BackButton };
