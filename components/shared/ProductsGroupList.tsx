"use client";

import { cn } from "@/lib/utils";
import { ProductCard, Title } from ".";
import { useIntersection } from "react-use";
import React, { useEffect } from "react";
import { useCategoryStore } from "@/store/category";

type Props = {
	title: string;
	products: any[];
	categoryId: number;
	listClassName?: string;
	className?: string;
};

export const ProductsGroupList = ({
	title,
	products,
	categoryId,
	listClassName,
	className,
}: Props) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [categoryId, title, intersection?.isIntersecting]);

	return (
		<div
			className={className}
			id={title}
			ref={intersectionRef}>
			<Title
				text={title}
				size='lg'
				className='font-extrabold mb-5'
			/>

			<div className={cn("grid grid-cols-3 gap-12", listClassName)}>
				{products.map((product, i) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={999}
						// price={product.productItems[0].id}
					/>
				))}
			</div>
		</div>
	);
};
