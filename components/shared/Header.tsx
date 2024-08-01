import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { Container, SearchInput } from ".";
import Link from "next/link";

type Props = {
	className?: string;
};

export const Header = ({ className }: Props) => {
	return (
		<header className={cn("border border-b", className)}>
			<Container className='flex items-center justify-between py-8'>
				<Link href='/'>
					<div className='flex items-center gap-4'>
						<Image
							src='/logo.png'
							alt='logo'
							width={35}
							height={35}
						/>
						<div>
							<h1 className='text-2xl uppercase font-black'>Next Food Shop</h1>
							<p className='text-sm text-gray-400 leading-3'>food shop</p>
						</div>
					</div>
				</Link>

				<div className='flex-1 mx-10'>
					<SearchInput />
				</div>

				<div className='flex items-center gap-3'>
					<Button
						variant='outline'
						className='flex items-center gap-3'>
						<User size={16} />
						Войти
					</Button>

					<div>
						<Button className='group relative'>
							<b>99 $</b>
							<span className='h-full w-[1px] bg-white/30 mx-2' />
							<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
								<ShoppingCart
									strokeWidth={2}
									size={16}
									className='relative'
								/>
								<b>8</b>
							</div>
							<ArrowRight
								size={20}
								className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
							/>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	);
};
