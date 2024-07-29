import {
	Container,
	Filters,
	ProductCard,
	Title,
	TopBar,
} from "@/components/shared";

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title
					text='Вся еда'
					size='lg'
					className='font-extrabold mb-2'
				/>
			</Container>

			<TopBar />

			<Container className='pb-14 mt-10'>
				<div className='flex gap-16'>
					{/* Filters section (left) */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* Products list section (right) */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductCard
								id={1}
								name='Холодец'
								price={35}
								imageUrl='https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_640.jpg'
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
