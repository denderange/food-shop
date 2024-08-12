"use client";

import { cn } from "@/lib/utils";

type Variant = {
	name: string;
	value: string;
	disabled?: boolean;
};

type Props = {
	items: readonly Variant[];
	onClick?: (value: Variant["value"]) => void;
	selectedValue?: Variant["value"];
	className?: string;
};

export const ProductVariants = ({
	items,
	onClick,
	selectedValue,
	className,
}: Props) => {
	return (
		<div
			className={cn(
				"flex justify-between bg-gray-50 rounded-3xl p-1 select-none",
				className
			)}>
			{items.map((item) => (
				<button
					key={item.name}
					onClick={() => onClick?.(item.value)}
					className={cn(
						"flex flex-1 justify-center items-center cursor-pointer rounded-3xl h-[30px] px-5 transition-all duration-400 text-sm",
						{
							"bg-white shadow": item.value === selectedValue,
							"text-gray-500 opacity-50 pointer-events-none": item.disabled,
						}
					)}>
					{item.name}
				</button>
			))}
		</div>
	);
};
