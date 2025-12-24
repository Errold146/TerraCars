import { toast } from "sonner";
import { create } from "zustand";
import { Car } from "@prisma/client";
import { persist, createJSONStorage } from "zustand/middleware"

interface FavoriteInterface {
    favoriteItems: Car[]
    addFavoriteItem: (data: Car) => void
    removeFavoriteItem: (id: string) => void
}

export const useFavoritesCars = create(
    persist<FavoriteInterface>(
        (set, get) => ({
            favoriteItems: [],

            addFavoriteItem: (data: Car) => {

                set({
                    favoriteItems: [...get().favoriteItems, data]
                })

                toast.success("Cart added to favorites list")
            },

            removeFavoriteItem: (id: string) => {
                set({
                    favoriteItems: [...get().favoriteItems.filter(item => item.id !== id)]
                })

                toast.success("Cart removed from favorites")
            }
        }),
        {
            name: "favorites-cars",
            storage: createJSONStorage(() => localStorage)
        }
    )
)