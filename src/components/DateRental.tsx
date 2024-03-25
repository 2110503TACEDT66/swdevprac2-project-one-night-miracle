'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"
import { useState } from "react"

export default function DateRental({onChange} : {onChange:Function}) {

    const [rentalDate, setRentalDate] = useState<Dayjs|null>(null)

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={rentalDate}
                onChange={(value) => {setRentalDate(value); onChange(value)}}/>
            </LocalizationProvider>
        </div>
    );

}