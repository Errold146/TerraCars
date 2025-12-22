import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "TerraCars - Manager Cars",
	description: "Manage vehicles.",
};

export default function CarsManagerLayout({children}: {children: React.ReactNode}) {
    return (
        <div>{children}</div>
    )
}
