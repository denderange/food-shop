import { Container, ProductImage, Title } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
	const product = await prisma.product.findFirst({ where: { id: Number(id) } });

	if (!product) {
		return notFound();
	}

	return (
		<Container className='flex flex-col my-10'>
			<div className='flex flex-1'>
				<ProductImage
					imageUrl={product.imageUrl}
					size={40}
				/>

				<div className='w-[490px] bg-gray-50 p-7'>
					<Title
						text={product.name}
						size='md'
						className='font-extrabold mb-1'
					/>
					<p className='text-gray-400'>-=-=-=-=</p>
					{/* <ProductVariants 
          items={product}
          /> */}
				</div>
			</div>
		</Container>
	);
};

export default ProductPage;
