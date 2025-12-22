import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number | string): string {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price
  
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(numericPrice)
}
