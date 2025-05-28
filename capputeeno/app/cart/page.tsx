import { BackButton } from "@/components/back-button";
import { CartList } from "@/components/cart-list";
import { CartResume } from "@/components/cart-resume";
import { CartContent, Wrapper } from "@/styles/cart-page";
import { Container, MainBase } from "@/styles/globals";

const CartPage = () => {
	return (
		<MainBase>
			<Wrapper>
				<Container>
					<CartContent>
						<BackButton />
						<CartList />
					</CartContent>
					<CartResume />
				</Container>
			</Wrapper>
		</MainBase>
	);
};

export default CartPage;
