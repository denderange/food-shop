"use client";

import { cn } from "@/shared/lib/utils";
import { Api } from "@/shared/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

type Props = {
	className?: string;
};

export const SearchInput = ({ className }: Props) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [focused, setFocused] = useState(false);
	const [products, setProducts] = useState<Product[]>([]);
	const ref = useRef(null);

	useClickAway(ref, () => {
		setFocused(false);
	});

	useDebounce(
		async () => {
			try {
				const responce = await Api.products.search(searchQuery);
				setProducts(responce);
			} catch (error) {
				console.error(error);
			}
		},
		250,
		[searchQuery]
	);

	const onClickItem = () => {
		setFocused(false);
		setProducts([]);
		setSearchQuery("");
	};

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
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>

				{products.length > 0 && (
					<div
						className={cn(
							"absolute w-full bg-white rounded-xl py-2 px-2 top-14 shadow-md transition-all duration-300 invisible opacity-0 z-30",
							focused && "visible top-12 opacity-100"
						)}>
						{products.map((product) => (
							<Link
								key={product.id}
								href={`/product/${product.id}`}
								onClick={onClickItem}
								className='flex items-center gap-4 w-full px-3 py-2 hover:bg-primary/10 transition-all duration-300 rounded-xl'>
								<Image
									width={32}
									height={32}
									src={product.imageUrl}
									alt={product.name}
									className='rounded-sm'
								/>
								<span>{product.name}</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	);
};
