import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import { useState } from "react";

interface PriceRangeProps {
	priceFrom?: number;
	priceTo?: number;
}

interface QueryFilters extends PriceRangeProps {
	pizzaTypes: string;
	sizes: string;
	ingredients: string;
}

export interface Filters {
	sizes: Set<string>;
	pizzaTypes: Set<string>;
	selectedIngredients: Set<string>;
	price: PriceRangeProps;
}

interface ReturnProps extends Filters {
	setSelectedIngredients: (value: string) => void;
	setSizes: (value: string) => void;
	setPizzaTypes: (value: string) => void;
	setPrice: (name: keyof PriceRangeProps, value: number) => void;
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>;

	// filter ingredients
	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(searchParams.get("ingredients")?.split(","))
	);

	// filter sizes
	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(
			searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
		)
	);

	// filter pizza types
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
		new Set<string>(
			searchParams.has("pizzaTypes")
				? searchParams.get("pizzaTypes")?.split(",")
				: []
		)
	);

	// filter price
	const [price, setPrice] = useState<PriceRangeProps>({
		priceFrom: Number(searchParams.get("priceFrom")) || undefined,
		priceTo: Number(searchParams.get("priceTo")) || undefined,
	});

	const updatePrice = (name: keyof PriceRangeProps, value: number) => {
		setPrice((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return {
		selectedIngredients,
		sizes,
		pizzaTypes,
		price,
		setSelectedIngredients: toggleIngredients,
		setSizes: toggleSizes,
		setPizzaTypes: togglePizzaTypes,
		setPrice: updatePrice,
	};
};
