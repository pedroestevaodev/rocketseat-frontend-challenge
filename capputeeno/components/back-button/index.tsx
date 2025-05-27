"use client";

import { useRouter } from "next/navigation";
import { BackArrowIcon } from "../icons/back-arrow-icon";
import { Button, Wrapper } from "./styles";
import { BackButtonProps } from "@/types/components";

const BackButton = ({ navigate }: BackButtonProps) => {
	const router = useRouter();

	const handleNavigate = () => router.push(navigate);

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
