import { cn } from "@/lib/utils";

type Props = {
	className?: string;
};

const categories = ["Закуски", "Кофе", "Десерты", "Салаты", "Коктейли", "Обед"];
const activeIndex = 0;

export const Categories = ({ className }: Props) => {
	return (
		<div
			className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}>
			{categories.map((category, index) => (
				<a
					href={`/#${category}`}
					key={index}
					className={cn(
						"flex items-center font-bold h-11 rounded-2xl px-5",
						activeIndex === index &&
							"bg-white shadow-md shadow-gray-200 text-primary"
					)}>
					<button>{category}</button>
				</a>
			))}
		</div>
	);
};
