import { Car } from "@prisma/client"
import { CardCar } from "./CardCar"

interface Props {
    cars: Car[]
}

export function ListCar({ cars }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 lg:grid-cols-3 xl:grid-cols-4">
            {
                cars.map(car => (
                    <CardCar car={car} key={car.id} />
                ))
            }
        </div>
    )
}
