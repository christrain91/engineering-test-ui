import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Engineering Test - Next.js",
	description: "Engineering Test - Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="bg-slate-100" lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
