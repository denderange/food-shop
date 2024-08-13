"use client";

import { Dialog } from "@/shared/components/ui";
import { DialogContent, DialogTitle } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { FormChooseProduct } from "../FormChooseProduct";
import { ProductWithRelations } from "@/@types/product";
import { FormChoosePizza } from "../FormChoosePizza";

type Props = {
	product: ProductWithRelations;
	className?: string;
};

export const ModalChoseProduct = ({ product, className }: Props) => {
	const router = useRouter();
	const isPizzaForm = true;

	return (
		<Dialog
			open={Boolean(product)}
			onOpenChange={() => router.back()}>
			<DialogTitle />
			<DialogContent
				className={cn(
					"p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
					className
				)}>
				{isPizzaForm ? (
					<FormChoosePizza
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={product.ingredients}
						items={product.productItems}
					/>
				) : (
					<FormChooseProduct
						imageUrl={product.imageUrl}
						name={product.name}
					/>
				)}
			</DialogContent>
		</Dialog>
	);
};
