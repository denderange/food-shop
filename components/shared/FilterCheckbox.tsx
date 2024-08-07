import React from "react";
import { Checkbox } from "../ui";

export type FilterCheckboxProps = {
	text: string;
	value: string;
	endAdorment?: React.ReactNode;
	onCheckChange?: (checked: boolean) => void;
	checked?: boolean;
	name?: string;
};

export const FilterCheckbox = ({
	text,
	value,
	endAdorment,
	onCheckChange,
	checked,
	name,
}: FilterCheckboxProps) => {
	return (
		<div className='flex items-center'>
			<Checkbox
				checked={checked}
				onCheckedChange={onCheckChange}
				value={value}
				id={`checkbox-${String(name)}-checkbox-${String(value)}`}
				className='rounded-[8px] w-6 h-6'
			/>
			<label
				htmlFor={`checkbox-${String(name)}-checkbox-${String(value)}`}
				className='leading-none cursor-pointer flex-1 pl-2 hover:text-orange-600 duration-300 select-none'>
				{text}
			</label>
			{endAdorment}
		</div>
	);
};
