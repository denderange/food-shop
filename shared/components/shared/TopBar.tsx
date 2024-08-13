import { cn } from "@/shared/lib/utils";
import { Container } from "./Container";
import { Categories } from "./Categories";
import { SortPopup } from "./SortPopup";
import { Category } from "@prisma/client";

type Props = {
	categories: Category[];
	className?: string;
};

export const TopBar = ({ categories, className }: Props) => (
	<div
		className={cn(
			"sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
			className
		)}>
		<Container className='flex justify-between'>
			<Categories categories={categories} />
			<SortPopup />
		</Container>
	</div>
);
