import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Categories } from "./Categories";
import { SortPopup } from "./SortPopup";

type Props = {
	className?: string;
};

export const TopBar = ({ className }: Props) => (
	<div
		className={cn(
			"sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
			className
		)}>
		<Container className='flex justify-between'>
			<Categories />
			<SortPopup />
		</Container>
	</div>
);
