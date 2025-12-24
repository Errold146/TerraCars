import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { ListFavoritesCars } from "./components/ListFavoritesCars";

export default async function FavoritesCarsPage() {

    const { userId } = await auth()
    if(!userId) return redirect("/");

    return (
        <div>
            <h2 className="text-2xl font-semibold">My Favorites</h2>
            <ListFavoritesCars />
        </div>
    )
}
