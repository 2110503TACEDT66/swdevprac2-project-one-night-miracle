'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"
import { useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function DateReserve({onChange} : {onChange:Function}) {

    const theme = createTheme({
        palette: {
            mode: 'dark'
          }
    })

    const [rentalDate, setRentalDate] = useState<Dayjs|null>(null)

    return (
        <ThemeProvider theme={theme}>
        <div className="bg-gray-300 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-gray-400"
                value={rentalDate}
                onChange={(value) => {setRentalDate(value); onChange(value)}}/>
            </LocalizationProvider>
        </div>
        </ThemeProvider>
    );

}