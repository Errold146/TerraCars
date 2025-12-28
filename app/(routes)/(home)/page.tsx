import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet";
import { Navbar } from "@/components/shared/Navbar";
import { DriveToday } from "./components/DriveToday";
import { FirstBlock } from "./components/FirstBlock";
import { SliderBrands } from "./components/SliderBrands";

export default function Home() {
	return (
		<div>
			<Navbar />
			<FirstBlock />
			<SliderBrands />
			<Features />
			<OurFleet />
			<DriveToday />
		</div>
	);
}
