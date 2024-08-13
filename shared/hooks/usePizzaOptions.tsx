import { useEffect, useState } from "react";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { Variant } from "../components/shared/ProductVariants";
import { useSet } from "react-use";
import { getAvailablePizzaSizes } from "../lib/get-available-pizza-sizes";
import { ProductItem } from "@prisma/client";

interface ReturnProps {
	size: PizzaSize;
	type: PizzaType;
	selectedIngredients: Set<number>;
	availableSizes: Variant[];
	setSize: (size: PizzaSize) => void;
	setType: (size: PizzaType) => void;
	addIngredient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
	const [size, setSize] = useState<PizzaSize>(20);
	const [type, setType] = useState<PizzaType>(1);
	const availableSizes = getAvailablePizzaSizes(type, items);
	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	);

	useEffect(() => {
		const isAvailableSize = availableSizes?.find(
			(item) => Number(item.value) === size && !item.disabled
		);
		const availableSize = availableSizes?.find((item) => !item.disabled);

		if (!isAvailableSize && availableSize) {
			setSize(Number(availableSize.value) as PizzaSize);
		}
	}, [type]);

	return {
		size,
		type,
		selectedIngredients,
		availableSizes,
		setSize,
		setType,
		addIngredient,
	};
};
