"use client";

import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
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
	const isPizzaForm = Boolean(product.items[0].pizzaType);

	return (
		<Dialog
			open={Boolean(product)}
			onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					"p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
					className
				)}>
				{isPizzaForm ? (
					<FormChoosePizza
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={[]}
					/>
				) : (
					<FormChooseProduct
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={[]}
					/>
				)}
			</DialogContent>
		</Dialog>
	);
};
