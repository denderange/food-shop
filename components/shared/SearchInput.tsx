"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

type Props = {
	className?: string;
};

export const SearchInput = ({ className }: Props) => {
	const [focused, setFocused] = useState(false);
	const ref = useRef(null);

	useClickAway(ref, () => {
		setFocused(false);
	});

	return (
		<>
			{focused && <div className='fixed inset-0 bg-black/50 z-30'></div>}
			<div
				ref={ref}
				className={cn(
					"flex rounded-2xl flex-1 justify-between relative h-11",
					className
				)}>
				<Search
					size={20}
					className='absolute top-1/2 translate-y-[-50%] left-3 text-gray-400'
				/>
				<input
					type='text'
					placeholder='Поиск...'
					className='rounded-2xl outline-none w-full bg-gray-100 pl-11 z-50'
					onFocus={() => setFocused(true)}
				/>

				<div
					className={cn(
						"absolute w-full bg-white rounded-xl py-2 px-2 top-14 shadow-md transition-all duration-300 invisible opacity-0 z-30",
						focused && "visible top-12 opacity-100"
					)}>
					<Link
						href='/product/1'
						className='flex items-center gap-4 w-full px-3 py-2 hover:bg-primary/10 transition-all duration-300 rounded-xl'>
						<Image
							width={32}
							height={32}
							src='https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285_640.png'
							alt='pizza-1'
							className='rounded-sm'
						/>
						<span>fsefsfsese</span>
					</Link>
				</div>
			</div>
		</>
	);
};
