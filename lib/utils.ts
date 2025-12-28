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

export function formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
