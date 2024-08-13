import { Ingredient, ProductItem } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcPizzaParams } from "./calc-pizza-params";

export const getPizzaDetails = (
	type: PizzaType,
	size: PizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;
	const totalPrice = calcPizzaParams(
		type,
		size,
		items,
		ingredients,
		selectedIngredients
	);

	return { totalPrice, textDetails };
};
