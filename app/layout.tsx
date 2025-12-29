import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner'

import {ClerkProvider} from '@clerk/nextjs'
import { Footer } from "@/components/shared/Footer";

const outFit = Outfit({
  	subsets: ["latin"],
	display: 'swap',
});

export const metadata: Metadata = {
	title: "TerraCars",
	description: "Luxury vehicle rental.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={`${outFit.className} flex flex-col min-h-screen`}
				>
					<NextTopLoader color="#000" />
					<main className="flex-1">
						{children}
					</main>
					<Footer />
					<Toaster position="top-right" richColors />
				</body>
			</html>
		</ClerkProvider>
	);
}
