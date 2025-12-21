import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

import {ClerkProvider} from '@clerk/nextjs'

const outFit = Outfit({
  	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "TerraCars",
	description: "Renta de vehículos de lujo.",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		
		<ClerkProvider>
			<html lang="es">
				<body
					className={`${outFit.className}`}
				>
					<NextTopLoader color="#000" />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
