import Image from "next/image";
import Link from "next/link";
import { Title } from "./Title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

type Props = {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	className?: string;
};

export const ProductCard = ({
	id,
	name,
	price,
	imageUrl,
	className,
}: Props) => {
	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
					<Image
						width={215}
						height={215}
						src={imageUrl}
						alt={name}
					/>
				</div>

				<Title
					text={name}
					size='sm'
					className='mb-1 mt-3 font-bold'
				/>

				<p className='text-sm text-gray-400'>...the list of ingredients...</p>

				<div className='flex justify-between items-center mt-4'>
					<span className='text-xl'>
						от <b>{price} $</b>
					</span>
					<Button
						variant='secondary'
						className='text-base font-bold'>
						<Plus
							size={20}
							className='mr-1'
						/>
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	);
};
