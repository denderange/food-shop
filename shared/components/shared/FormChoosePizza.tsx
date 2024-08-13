"use client";

import { cn } from "@/shared/lib/utils";
import { IngredientCart, PizzaImage, ProductVariants, Title } from ".";
import { Button } from "../ui";
import {
	PizzaSize,
	pizzaSizes,
	PizzaType,
	pizzaTypes,
} from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { usePizzaOptions } from "@/shared/hooks";
import { getPizzaDetails } from "@/shared/lib/get-pizza-detatils";

type Props = {
	imageUrl: string;
	name: string;
	ingredients: Ingredient[];
	items: ProductItem[];
	onClickAddCart?: VoidFunction;
	className?: string;
};

export const FormChoosePizza = ({
	imageUrl,
	name,
	ingredients,
	items,
	onClickAddCart,
	className,
}: Props) => {
	const {
		size,
		type,
		selectedIngredients,
		availableSizes,
		setSize,
		setType,
		addIngredient,
	} = usePizzaOptions(items);

	const { totalPrice, textDetails } = getPizzaDetails(
		type,
		size,
		items,
		ingredients,
		selectedIngredients
	);

	const handleClickAdd = () => {
		onClickAddCart?.();
	};

	return (
		<div className={cn("flex flex-1", className)}>
			<PizzaImage
				imageUrl={imageUrl}
				size={size}
			/>

			<div className='w-[490px] bg-blue-100 p-7'>
				<Title
					text={name}
					size='md'
					className='font-extrabold mb-1'
				/>
				<p className='text-gray-400'>{textDetails}</p>

				<div className='flex flex-col mt-4'>
					<ProductVariants
						items={pizzaSizes}
						value={String(size)}
						onClick={(value) => setSize(Number(value) as PizzaSize)}
					/>
					<ProductVariants
						items={pizzaTypes}
						value={String(type)}
						onClick={(type) => setType(Number(type) as PizzaType)}
					/>
				</div>

				<div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar'>
					<div className='grid grid-cols-3 gap-4'>
						{ingredients.map((ingredient) => (
							<IngredientCart
								key={ingredient.id}
								name={ingredient.name}
								price={ingredient.price}
								imageUrl={ingredient.imageUrl}
								onClick={() => addIngredient(ingredient.id)}
								active={selectedIngredients.has(ingredient.id)}
							/>
						))}
					</div>
				</div>

				<Button
					onClick={handleClickAdd}
					className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
					Добавить в корзину за {totalPrice} $
				</Button>
			</div>
		</div>
	);
};
