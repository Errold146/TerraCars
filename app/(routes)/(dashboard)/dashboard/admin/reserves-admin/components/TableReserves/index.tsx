import { Order } from "@prisma/client"
import { formatPrice, formatDate } from "@/lib/utils";
import {
    Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow
} from "@/components/ui/table";

interface Props {
    orders: Order[]
}

export function TableReserves({orders}: Props) {

    const totalAmount = orders.reduce((acc, booking) => {
        return acc + parseFloat(booking.totalAmount)
    }, 0)

    return (
        <Table>
            <TableCaption>Full list of reservations made.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-lg font-semibold">Order Date</TableHead>
                    <TableHead className="text-center text-lg font-semibold">Customer Id</TableHead>
                    <TableHead className="text-center text-lg font-semibold">Car</TableHead>
                    <TableHead className="text-center text-lg font-semibold">Date Start</TableHead>
                    <TableHead className="text-center text-lg font-semibold">Date End</TableHead>
                    <TableHead className="text-center text-lg font-semibold">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody> 
                {orders.map(or => (
                    <TableRow key={or.id}>
                        <TableCell className="font-medium">{formatDate(new Date(or.createdAt))}</TableCell>
                        <TableCell className="font-medium text-center truncate">{or.userId}</TableCell>
                        <TableCell className="font-medium text-center">{or.carName}</TableCell>
                        <TableCell className="font-medium text-center">{formatDate(new Date(or.orderDate))}</TableCell>
                        <TableCell className="font-medium text-center">{formatDate(new Date(or.orderEndDate))}</TableCell>
                        <TableCell className="font-medium text-center">{formatPrice(or.totalAmount)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell className="font-semibold text-lg" colSpan={5}>Total</TableCell>
                    <TableCell className="text-center font-semibold text-lg">{formatPrice(totalAmount)}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
