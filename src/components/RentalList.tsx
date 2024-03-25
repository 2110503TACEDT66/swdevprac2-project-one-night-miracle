"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/rentalSlice"

export default function RentalsList() {

    const rentalsItem = useAppSelector((state) => state.bookSlice.rentalsItem)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            rentalsItem.length !== 0? rentalsItem.map((rental:any) => (
                <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-sky-100 content-center" key={rental.id}>
                    <table className="table-auto border-separate border-spacing-4 mt-1 text-sky-500 text-md font-sans"><tbody>
                    <tr><td className="font-bold">Name</td><td>{rental.name}</td></tr>
                    <tr><td className="font-bold">Email</td><td>{rental.email}</td></tr>
                    <tr><td className="font-bold">Car</td><td>{rental.car}</td></tr>
                    <tr><td className="font-bold">Rental Date</td><td>{rental.rentalDate}</td></tr>
                </tbody></table>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" name="RemoveBooking"
                onClick={() => dispatch(removeBooking(rental.id))}>Remove this Rental</button>
                </div>
            )) : <div className="text-4xl font-bold font-serif mt-10 text-center">No Car Rental</div>
        }
        </>
    )
}