import { cn } from "@/lib/utils";
import { Title } from "./Title";
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider } from ".";
import { Input } from "../ui";

type Props = {
	className?: string;
};

export const Filters = ({ className }: Props) => {
	const minPrice = 0;
	const maxPrice = 1000;

	return (
		<div className={cn("", className)}>
			<Title
				text='Фильтрация'
				size='sm'
				className='mb-5 font-bold'
			/>

			<div className='flex flex-col gap-4'>
				<FilterCheckbox
					text='Можно собирать'
					value='1'
				/>
				<FilterCheckbox
					text='Новинки'
					value='2'
				/>
			</div>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						min={minPrice}
						max={maxPrice}
						placeholder='0'
						defaultValue={0}
					/>
					<Input
						type='number'
						min={100}
						max={1000}
						placeholder='1000'
					/>
				</div>

				<RangeSlider
					min={minPrice}
					max={maxPrice}
					step={10}
					value={[minPrice, maxPrice]}
				/>
			</div>

			<CheckboxFiltersGroup
				title='Ингредиенты'
				limit={5}
				className='mt-5'
				defaultItems={[
					{ text: "Кетчуп", value: "1" },
					{ text: "Майонез", value: "2" },
					{ text: "Чеснок", value: "3" },
					{ text: "Кетчуп", value: "1" },
					{ text: "Майонез", value: "2" },
					{ text: "Чеснок", value: "3" },
					{ text: "Кетчуп", value: "1" },
					{ text: "Майонез", value: "2" },
					{ text: "Чеснок", value: "3" },
					{ text: "Кетчуп", value: "1" },
					{ text: "Майонез", value: "2" },
					{ text: "Чеснок", value: "3" },
				]}
				items={[
					{ text: "Кетчуп", value: "1" },
					{ text: "Майонез", value: "2" },
					{ text: "Чеснок", value: "3" },
					{ text: "Кетчуп", value: "1" },
					{ text: "Майонез", value: "2" },
					{ text: "Чеснок", value: "3" },
					{ text: "Кетчуп", value: "1" },
					{ text: "Майонез", value: "2" },
					{ text: "Чеснок", value: "3" },
					{ text: "Кетчуп", value: "1" },
					{ text: "Майонез", value: "2" },
					{ text: "Чеснок", value: "3" },
				]}
			/>
		</div>
	);
};
