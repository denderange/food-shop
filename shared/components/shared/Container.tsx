import { cn } from "@/shared/lib/utils";

type Props = {
	className?: string;
	children: React.ReactNode;
};

export const Container = ({ className, children }: Props) => {
	return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
};
