import {Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { formatPrice, formatDate } from "@/lib/utils"
import { Order } from "@prisma/client"

interface Props {
    orders: Order[]
}

export function TableReserves({ orders }: Props) {

    const totalAmount = orders.reduce((acc, booking) => {
        return acc + parseFloat(booking.totalAmount)
    }, 0)

    return (
        <Table className="px-32">
            <TableCaption>A list of your recent bookings.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-bold text-lg">Car</TableHead>
                    <TableHead className="font-bold text-lg">DateStart</TableHead>
                    <TableHead className="font-bold text-lg">Date End</TableHead>
                    <TableHead className="font-bold text-lg text-center">Status</TableHead>
                    <TableHead className="text-center font-bold text-lg">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    orders.map(or => (
                        <TableRow key={or.id}>
                            <TableCell 
                                className="font-medium"
                            >{or.carName}</TableCell>
                            <TableCell 
                                className="font-medium"
                            >{formatDate(new Date(or.orderDate))}</TableCell>
                            <TableCell 
                                className="font-medium"
                            >{formatDate(new Date(or.orderEndDate))}</TableCell>
                            <TableCell 
                                className="font-medium mx-8 text-center uppercase text-white bg-emerald-500 rounded-lg w-fit"
                            >{or.status}</TableCell>
                            <TableCell 
                                className="text-center font-medium"
                            >{formatPrice(or.totalAmount)}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell className="font-semibold text-lg" colSpan={4}>Total</TableCell>
                    <TableCell className="text-center font-semibold text-lg">{formatPrice(totalAmount)}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
