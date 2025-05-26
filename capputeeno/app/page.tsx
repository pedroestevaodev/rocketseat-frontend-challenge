import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import { MainBase } from "@/styles/globals";

const Home = () => {
	return (
		<MainBase>
			<FilterBar />
			<ProductsList />
		</MainBase>
	);
};

export default Home;
