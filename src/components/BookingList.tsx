"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingList() {

    const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
        {
            bookItems.length !== 0? bookItems.map((book) => (
                <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-sky-100 content-center" key={book.id}>
                    <table className="table-auto border-separate border-spacing-4 mt-1 text-sky-500 text-md font-sans"><tbody>
                    <tr><td className="font-bold">Name</td><td>{book.name}</td></tr>
                    <tr><td className="font-bold">Lastname</td><td>{book.surname}</td></tr>
                    <tr><td className="font-bold">Citizen ID</td><td>{book.id}</td></tr>
                    <tr><td className="font-bold">Hospital</td><td>{book.hospital}</td></tr>
                    <tr><td className="font-bold">Booking Date</td><td>{book.bookDate}</td></tr>
                </tbody></table>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" name="RemoveBooking"
                onClick={() => dispatch(removeBooking(book.id))}>Remove this Booking</button>
                </div>
            )) : <div className="text-4xl font-bold font-serif mt-10 text-center">No Vaccine Booking</div>
        }
        </>
    )
}