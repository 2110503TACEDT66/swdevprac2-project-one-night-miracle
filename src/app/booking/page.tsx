"use client"
import DateReserve from "@/components/DateRental";
import { Select, MenuItem, TextField } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import dayjs from "dayjs";
import { addBooking } from "@/redux/features/rentalSlice";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default function Booking() {
    
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt); 

    
    
    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if(name && lastname && id && hospital && bookDate){
            const book:rentalsItem = {
                _id: string,
                rentalDate:Date,
                user:string,
                car:string,
                isPaid:Boolean,
                createdAt:Date 
            }
            dispatch(addBooking(book))
        }
    }

    const [name, setName] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [id, setId] = useState<string>("")
    const [hospital, setHospital] = useState<string>("")
    const [bookDate, setBookDate] = useState<Dayjs|null>(null)

    return(
        <main className="flex flex-col items-center space-y-4 w-[100%]">
            <div className="text-4xl font-bold font-serif mt-10">Car Rental</div>
            <table className="table-auto border-seperate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.telephoneNumber}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>
            <Select variant="standard" name="hospital" id="hospital" className="h-[2em] w-[200px]" value={hospital} onChange={(e) => {setHospital(e.target.value)}}>
                <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
            </Select>
            <DateReserve onChange={(value:Dayjs) => {setBookDate(value)}}/>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" name="Book Vaccine" onClick={makeBooking}>Book Vaccine</button>
        </main>
    );
}