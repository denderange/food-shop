import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * Подсчет общей стоимости пиццы
 *
 * @param type - тип теста
 * @param size - размер пиццы (20, 30, или 40см)
 * @param items - список вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные пользователем ингредиенты
 *
 * @returns number - общая стоимость
 *
 */

export const calcPizzaParams = (
	type: PizzaType,
	size: PizzaSize,
	items: ProductItem[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const pizzaPrice =
		items.find((item) => item.pizzaType === type && item.size === size)
			?.price || 0;
	const totalIngredientsPrice = ingredients
		.filter((ingredient) => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0);

	return pizzaPrice + totalIngredientsPrice;
};
