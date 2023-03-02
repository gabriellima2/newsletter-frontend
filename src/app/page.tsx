import { Inter } from "next/font/google";
import { Subscribe } from "@/presentation/components/Subscribe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return <Subscribe />;
}
