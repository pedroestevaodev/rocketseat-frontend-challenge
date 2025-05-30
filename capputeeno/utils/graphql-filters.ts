import { FilterTypes, PriorityTypes } from "@/types/contexts";
import { ProductPagination } from "@/types/products";

export const getCategoryByType = (type: FilterTypes): string => {
	if (type === FilterTypes.MUG) return "mugs";
	if (type === FilterTypes.SHIRT) return "t-shirts";

	return "";
};

export const getFieldByPriority = (priority: PriorityTypes) => {
	if (priority === PriorityTypes.NEWS)
		return { field: "created_at", order: "ASC" };
	if (priority === PriorityTypes.BIGGEST_PRICE)
		return { field: "price_in_cents", order: "DSC" };
	if (priority === PriorityTypes.MINOR_PRICE)
		return { field: "price_in_cents", order: "ASC" };

	return { field: "sales", order: "DSC" };
};

export const mountQuery = (
	type: FilterTypes,
	priority: PriorityTypes,
	pagination: ProductPagination,
) => {
	const paginationArgs = `page: ${pagination.page}, perPage: ${pagination.perPage}`;

	if (type === FilterTypes.All && priority === PriorityTypes.POPULARITY)
		return `
		query {
			allProducts(sortField: "sales", sortOrder: "DSC", ${paginationArgs}) {
				id
				name
				price_in_cents
				image_url
			}
			_allProductsMeta {
				count
			}
		}
	`;

	const sortSettings = getFieldByPriority(priority);
	const categoryFilter = getCategoryByType(type);

	return `
		query {
			allProducts(
				sortField: "${sortSettings.field}",
				sortOrder: "${sortSettings.order}",
				${categoryFilter ? `filter: { category: "${categoryFilter}" },` : ""}
				${paginationArgs}
			) {
				id
				name
				price_in_cents
				image_url
			}
            _allProductsMeta {
                count
            }
		}
	`;
};
