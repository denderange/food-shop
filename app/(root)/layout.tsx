import type { Metadata } from "next";
import { Header } from "@/components/shared";

export const metadata: Metadata = {
	title: "Food Shop App",
	description: "Home page",
};

export default function HomeLayout({
	modal,
	children,
}: Readonly<{
	modal: React.ReactNode;
	children: React.ReactNode;
}>) {
	return (
		<main className='min-h-screen px-3'>
			<Header />
			{children}
			{modal}
		</main>
	);
}
