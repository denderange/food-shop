"use client";

import React, { useState } from "react";
import { Input, Skeleton } from "../ui";
import { FilterCheckbox, FilterCheckboxProps } from "./FilterCheckbox";

type Props = {
	title: string;
	items: FilterCheckboxProps[];
	defaultItems?: FilterCheckboxProps[];
	limit?: number;
	loading?: boolean;
	searchInputPlaceholder?: string;
	onClickCheckbox?: (id: string) => void;
	defaultValue?: string[];
	className?: string;
	selectedValues?: Set<string>;
	name: string;
};

export const CheckboxFiltersGroup = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = "Поиск...",
	onClickCheckbox,
	defaultValue,
	className,
	loading,
	selectedValues,
	name,
}: Props) => {
	const [showAll, setShowAll] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	const listItems = showAll
		? items.filter((item) =>
				item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
		  )
		: (defaultItems || items).slice(0, limit);

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	if (loading) {
		return (
			<div className={className}>
				<p className='font-bold mb-3'>{title}</p>

				{[...Array(limit)].map((_, index) => (
					<Skeleton
						key={index * 1000}
						className='h-6 mb-4 rounded-[8px] bg-orange-100'
					/>
				))}
			</div>
		);
	}

	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						placeholder={searchInputPlaceholder}
						className='bg-gray-100 border-none'
						onChange={(e) => onChangeSearchInput(e)}
					/>
				</div>
			)}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{listItems.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						name={name}
						endAdorment={item.endAdorment}
						checked={selectedValues?.has(item.value)}
						onCheckChange={() => onClickCheckbox?.(item.value)}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
					<button
						onClick={() => setShowAll(!showAll)}
						className='text-primary mt-5'>
						{showAll ? "Скрыть" : "+ Показать все"}
					</button>
				</div>
			)}
		</div>
	);
};
