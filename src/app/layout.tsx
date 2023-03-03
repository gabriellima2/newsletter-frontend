import { Inter } from "next/font/google";

export const mainFont = Inter({ subsets: ["latin"], variable: "--main-font" });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${mainFont.className}`}>{children}</body>
		</html>
	);
}
