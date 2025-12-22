import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2, {message: "Name must be at least 2 characters"}).max(50, { message: "Name is too long"}),
    cv: z.string().min(1, {message: "CV is required"}).max(50, { message: "CV is too long"}),
    transmission: z.string().min(2, {message: "Transmission is required"}).max(50, { message: "Transmission is too long"}),
    people: z.string().min(1, {message: "Number of people is required"}),
    photo: z.string().min(2, {message: "Photo URL is required"}).max(100, { message: "Photo URL is too long"}),
    engine: z.string().min(2, {message: "Engine type is required"}).max(50, { message: "Engine type is too long"}),
    type: z.string().min(2, {message: "Car type is required"}).max(50, { message: "Car type is too long"}),
    priceDay: z.string().min(1, {message: "Price is required"}).max(50, { message: "Price is too long"}),
    isPublish: z.boolean().optional()
})