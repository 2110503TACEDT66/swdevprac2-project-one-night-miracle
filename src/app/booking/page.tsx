"use client"
import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import dayjs from "dayjs";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() {

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = () => {
        if(name && lastname && id && hospital && bookDate){
            const book:BookingItem = {
                name: name,
                surname: lastname,
                id: id,
                hospital: hospital,
                bookDate: dayjs(bookDate).format("YYYY/MM/DD")
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
            <div className="text-4xl font-bold font-serif mt-10">Vaccine Booking</div>
            <TextField variant="standard" name="Name" label="Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
            <TextField variant="standard" name="Lastname" label="Lastname" value={lastname} onChange={(e) => {setLastname(e.target.value)}}/>
            <TextField variant="standard" name="Citizen ID" label="Citizen ID" value={id} onChange={(e) => {setId(e.target.value)}}/>
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