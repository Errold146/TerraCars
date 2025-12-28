import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

export function DriveToday() {
    return (
        <div className="p-6 lg:my-32 max-w-7xl mx-auto">
            <div className="bg-[url('/images/home/background-2.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
                <div className="lg:flex gap-x-6">
                    <div>
                        <h3 className="text-gray-100 text-4xl">Driver your dream car today</h3>
                        <p className="text-gray-300 text-xl my-5">
                            Register and explore the word of premium cars
                        </p>

                        <Link href={"/sign-in"}>
                            <Button variant={"outline"} size={"lg"}>
                                Register here
                            </Button>
                        </Link>
                    </div>

                    <Reveal className="lg:absolute lg:-right-32 top-5" positions="bottom">
                        <Image 
                            src={"/images/home/audi.png"}
                            alt="Image of audi"
                            width={550}
                            height={250}
                            priority
                        />
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
