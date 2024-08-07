"use client";

import { Title } from "./Title";
import { CheckboxFiltersGroup, RangeSlider } from ".";
import { Input } from "../ui";
import { useQueryFilters, useFilters, useIngredients } from "@/hooks";

interface Props {
	className?: string;
}

export const Filters = ({ className }: Props) => {
	const minPrice = 0;
	const maxPrice = 1000;
	const pizzaSizes = [
		{ text: "20 см", value: "20" },
		{ text: "30 см", value: "30" },
		{ text: "40 см", value: "40" },
	];
	const pizzaDough = [
		{ text: "Тонкое", value: "1" },
		{ text: "Традиционное", value: "2" },
	];

	const { ingredients, loading } = useIngredients();
	const filters = useFilters();

	useQueryFilters(filters);

	const ingredientsItems = ingredients.map((item) => ({
		value: String(item.id),
		text: item.name,
	}));

	const updatePrices = (prices: number[]) => {
		filters.setPrice("priceFrom", prices[0]);
		filters.setPrice("priceTo", prices[1]);
	};

	return (
		<div className={className}>
			<Title
				text='Фильтрация'
				size='sm'
				className='mb-5 font-bold'
			/>

			<CheckboxFiltersGroup
				title='Тип теста'
				name='pizzaTypes'
				className='mb-5'
				items={pizzaDough}
				selectedValues={filters.pizzaTypes}
				onClickCheckbox={filters.setPizzaTypes}
			/>

			<CheckboxFiltersGroup
				title='Размеры'
				name='sizes'
				className='mb-5'
				items={pizzaSizes}
				selectedValues={filters.sizes}
				onClickCheckbox={filters.setSizes}
			/>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						min={minPrice}
						max={maxPrice}
						placeholder={String(minPrice)}
						value={String(filters.price.priceFrom)}
						onChange={(e) =>
							filters.setPrice("priceFrom", Number(e.target.value))
						}
					/>
					<Input
						type='number'
						min={100}
						max={1000}
						placeholder={String(maxPrice)}
						value={String(filters.price.priceTo)}
						onChange={(e) =>
							filters.setPrice("priceTo", Number(e.target.value))
						}
					/>
				</div>

				<RangeSlider
					min={minPrice}
					max={maxPrice}
					step={10}
					value={[
						filters.price.priceFrom || minPrice,
						filters.price.priceTo || maxPrice,
					]}
					onValueChange={updatePrices}
				/>
			</div>

			<CheckboxFiltersGroup
				title='Ингредиенты'
				name='ingredients'
				limit={5}
				className='mt-5'
				defaultItems={ingredientsItems.slice(0, 6)}
				items={ingredientsItems}
				loading={loading}
				onClickCheckbox={filters.setSelectedIngredients}
				selectedValues={filters.selectedIngredients}
			/>
		</div>
	);
};
