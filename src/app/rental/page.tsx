"use client"
import DateReserve from "@/components/DateRental";
import { Select, MenuItem, TextField } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import getCars from "@/libs/getCars";
import createRental from "@/libs/createRental";

export default function Booking() {
    
   /* const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt); */

    /*const makeBooking = () => {
        if(pickupDate && returnDate && profile && car){
            const book:rentalsItem = {
                pickupDate: dayjs(pickupDate).toDate(),
                returnDate: dayjs(returnDate).toDate(),
                user: profile.data._id,
                car: car,
                isPaid: false,
                createdAt: new Date(Date.now())
            }
            dispatch(addBooking(book))
        }
    }*/

    const [cars, setCars] = useState([])
    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)
    const [returnDate, setReturnDate] = useState<Dayjs|null>(null)
    const [cid, setCid] = useState<string>("")

    useEffect(() => {
        async function fetchCars() {
                const carsData = await getCars();
                setCars(carsData.data);
        }
        fetchCars()
    }, [])

    const handleClick = async () => {
        try {
            const session = await getServerSession(authOptions);
            if (!session || !session.user.token) return;
            createRental(cid, pickupDate, returnDate, session.user.token);
        } catch (error) {
            console.error("Error fetching session:", error);
        }
    }

    return(
        <main className="flex flex-col items-center space-y-4 w-[100%]">
            <div className="text-4xl font-bold font-serif mt-10">Car Rental</div>
            {/*<table className="table-auto border-seperate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.telephoneNumber}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>*/}
            <Select variant="standard" name="car" id="car" className="h-[2em] w-[200px]" value={cid} onChange={(e) => {setCid(e.target.value)}}>
                {
                    cars.map((carItem:CarsItem) => (
                        <MenuItem key={carItem.id} value={carItem.id}>{carItem.model}</MenuItem>
                    ))
                }
            </Select>
            <DateReserve onChange={(value:Dayjs) => {setPickupDate(value)}}/>
            <DateReserve onChange={(value:Dayjs) => {setReturnDate(value)}}/>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" name="Create Rental" onClick={handleClick}>Create Rental</button>
        </main>
    );
}