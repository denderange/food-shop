"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

type Props = {
	className?: string;
};

const categories = ["Закуски", "Кофе", "Десерты", "Салаты", "Коктейли", "Обед"];

export const Categories = ({ className }: Props) => {
	const activeCategoryId = useCategoryStore((state) => state.activeId);

	return (
		<div
			className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
			{categories.map((category, index) => (
				<a
					href={`/#${category}`}
					key={index}
					className={cn(
						"flex items-center font-bold h-11 rounded-2xl px-5",
						activeCategoryId === index + 1 &&
							"bg-white shadow-md shadow-gray-200 text-primary"
					)}>
					<button>{category}</button>
				</a>
			))}
		</div>
	);
};
