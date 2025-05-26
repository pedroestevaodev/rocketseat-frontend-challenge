import { ProductCardProps } from "@/types/components";
import { ProductContent, ProductImage, ProductLine, ProductName, ProductPrice, Wrapper } from "./styles";
import { formatPriceBRL } from "@/utils/format-prices";

const ProductCard = ({ image, price, title }: ProductCardProps) => {
	const formattedPrice = formatPriceBRL(price);

	return (
		<Wrapper>
			<ProductImage src={image} width={256} height={300} alt={title} />
			<ProductContent>
				<ProductName>{title}</ProductName>
				<ProductLine />
				<ProductPrice>{formattedPrice}</ProductPrice>
			</ProductContent>
		</Wrapper>
	);
};

export { ProductCard };
