import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
					productItems: true,
				},
			},
		},
	});

	return (
		<>
			<Container className='mt-10'>
				<Title
					text='Вся еда'
					size='lg'
					className='font-extrabold mb-2'
				/>
			</Container>

			<TopBar
				categories={categories.filter(
					(category) => category.products.length > 0
				)}
			/>

			<Container className='pb-14 mt-10'>
				<div className='flex gap-16'>
					{/* Filters section (left) */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* Products list section (right) */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							{categories.map(
								(category) =>
									category.products.length > 0 && (
										<ProductsGroupList
											key={category.id}
											categoryId={category.id}
											title={category.name}
											products={category.products}
										/>
									)
							)}
							<ProductsGroupList
								title='Кофе'
								products={[
									{
										id: 1,
										name: "Пицца Рита",
										imageUrl:
											"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg",
										price: 350,
										items: [{ price: 350 }],
									},
									{
										id: 1,
										name: "Пицца Рита",
										imageUrl:
											"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg",
										price: 350,
										items: [{ price: 350 }],
									},
									{
										id: 1,
										name: "Пицца Рита",
										imageUrl:
											"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg",
										price: 350,
										items: [{ price: 350 }],
									},
									{
										id: 1,
										name: "Пицца Рита",
										imageUrl:
											"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg",
										price: 350,
										items: [{ price: 350 }],
									},
									{
										id: 1,
										name: "Пицца Рита",
										imageUrl:
											"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg",
										price: 350,
										items: [{ price: 350 }],
									},
									{
										id: 1,
										name: "Пицца Рита",
										imageUrl:
											"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg",
										price: 350,
										items: [{ price: 350 }],
									},
									{
										id: 1,
										name: "Пицца Рита",
										imageUrl:
											"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg",
										price: 350,
										items: [{ price: 350 }],
									},
									{
										id: 1,
										name: "Пицца Рита",
										imageUrl:
											"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg",
										price: 350,
										items: [{ price: 350 }],
									},
									{
										id: 1,
										name: "Пицца Рита",
										imageUrl:
											"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg",
										price: 350,
										items: [{ price: 350 }],
									},
									{
										id: 1,
										name: "Пицца Рита",
										imageUrl:
											"https://cdn.pixabay.com/photo/2015/05/07/15/08/cookie-756601_640.jpg",
										price: 350,
										items: [{ price: 350 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
