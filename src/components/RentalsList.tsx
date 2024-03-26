"use client"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getRentals from "@/libs/getRentals"
import { getServerSession } from "next-auth"
import removeRental from "@/libs/removeRental"
import { useEffect, useState } from "react"

export default function RentalsList() {

    const [rentals, setRentals] = useState([])

    useEffect(() => { async function fetchRentals() {
        const session = await getServerSession(authOptions)
        if(!session || !session.user.token) return null

        const rentals = await getRentals(session.user.token)
        setRentals(rentals.data)
    }
    fetchRentals()
    }, [])

    const removeHandler = async (rid:string) => {
        const session = await getServerSession(authOptions)
        if(!session || !session.user.token) return null

        const removed = await removeRental(session.user.token, rid)
        if(removed){
            const rentals = await getRentals(session.user.token)
            setRentals(rentals.data)
        }
    }

    return (
        <>
        {
            rentals.length !== 0? rentals.map((rental:any) => (
                <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-sky-100 content-center" key={rental.id}>
                    <table className="table-auto border-separate border-spacing-4 mt-1 text-sky-500 text-md font-sans"><tbody>
                    <tr><td className="font-bold">User ID</td><td>{rental.user}</td></tr>
                    <tr><td className="font-bold">Car</td><td>{rental.car.model}</td></tr>
                    <tr><td className="font-bold">Pickup Date</td><td>{rental.pickupDate}</td></tr>
                    <tr><td className="font-bold">Return Date</td><td>{rental.returnDate}</td></tr>
                    <tr><td className="font-bold">Is Paid?</td><td>{rental.isPaid}</td></tr>
                </tbody></table>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" name="RemoveBooking"
                onClick={() => removeHandler(rental.id)}>Remove this Rental</button>
                </div>
            )) : <div className="text-4xl font-bold font-serif mt-10 text-center">No Car Rental</div>
        }
        </>
    )
}