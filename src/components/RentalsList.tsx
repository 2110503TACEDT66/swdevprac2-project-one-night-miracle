"use client"
import getRentals from "@/libs/getRentals"
import { useSession } from "next-auth/react"
import removeRental from "@/libs/removeRental"
import { useEffect, useState } from "react"
import { MenuItem, Select } from "@mui/material"
import getCars from "@/libs/getCars"
import Image from "next/image"
import getProviders from "@/libs/getProviders"
import { Dayjs } from "dayjs"
import DateReserve from "@/components/DateRental";
import editRental from "@/libs/editRental"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CarsItem,ProvidersItem, rentalsItem } from "../../interface"

export default function RentalsList() {

    const theme = createTheme({
        palette: {
            mode: 'dark'
          }
    })

    const [rentals, setRentals] = useState([])
    console.log(rentals)
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState("")

    const [cars, setCars] = useState([])
    const [cid, setCid] = useState<string>("")

    useEffect(() => {
        async function fetchCars() {
                const carsData = await getCars();
                setCars(carsData.data);
        }
        fetchCars()
    }, [])

    const [providers, setProviders] = useState([])
    const [provider, setProvider] = useState<string>("")

    useEffect(() => {
        async function fetchProviders() {
                const providersData = await getProviders();
                setProviders(providersData.data);
        }
        fetchProviders()
    }, [])

    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)
    const [returnDate, setReturnDate] = useState<Dayjs|null>(null)

    const session = useSession()
    if(!session || !session.data) return null

    useEffect(() => { async function fetchRentals() {
        if(!session || !session.data) return null
        const rentals = await getRentals(session.data.user.token)
        setRentals(rentals.data)
    }
    fetchRentals()
    }, [])

    const removeHandler = async (rid:string) => {
        if(!session || !session.data) return null

        try {
            await removeRental(session.data.user.token, rid)
            const rentals = await getRentals(session.data.user.token)
            setRentals(rentals.data)
            alert("Successfully removed rental.")

        } catch (error) {
            alert("Failed removing rental.")
        }
    }

    const editHandler = async () => {
        if(!session || !session.data) return null

        try {
            await editRental(id, pickupDate, returnDate, provider, cid, session.data.user.token)
            setEdit(false)
            const rentals = await getRentals(session.data.user.token)
            setRentals(rentals.data)
            alert("Successfully edited rental.")
        } catch (error) {
            alert("Failed editing rental.")
        }
    }
    console.log(rentals)
    return (
        <>
        {
                    edit? <ThemeProvider theme={theme}>
                    <div className="z-100 shadow-xl rounded-lg bg-gray-200 fixed top-0 left-0 w-screen h-screen flex  
                    items-center justify-center flex-col">
                        <Image src={"/images/x.png"} alt="x" width={0} height={0} className="fixed top-0 right-0 w-auto h-[5%] mt-20 mr-10" sizes="200vh"
                        onClick={() => setEdit(false)}/>
                        <h1 className="font-sans text-2xl font-semibold my-3">Car</h1>
                        <Select variant="standard" name="car" id="car" className="h-[2em] w-[200px] text-gray-500" value={cid} onChange={(e) => {setCid(e.target.value)}}>
                        {
                    cars.map((carItem:CarsItem) => (
                        <MenuItem key={carItem.id} value={carItem.id}>{carItem.model}</MenuItem>
                    ))
                        }
                        </Select>
                        <h1 className="font-sans text-xl font-semibold my-3">Provider</h1>
                        <Select variant="standard" name="provider" id="provider" className="h-[2em] w-[200px] text-gray-500" value={provider} onChange={(e) => {setProvider(e.target.value)}}>
                    {
                    providers.map((provider:ProvidersItem) => (
                        <MenuItem key={provider.name} value={provider.name}>{provider.name}</MenuItem>
                    ))
                    }
                        </Select>
                        <h1 className="font-sans text-xl font-semibold my-3">Pickup Date</h1>
                        <DateReserve onChange={(value:Dayjs) => {setPickupDate(value)}}/>
                        <h1 className="font-sans text-xl font-semibold my-3">Return Date</h1>
                        <DateReserve onChange={(value:Dayjs) => {setReturnDate(value)}}/>
                        <button className="block rounded-md bg-white text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white hover:border-transparent px-3 py-2 m-10 shadow-sm" name="Edit Rental" onClick={() => editHandler()}>Edit Rental</button>
                    </div>
                    </ThemeProvider> : ""
        }
        {
            rentals.length !== 0? rentals.map((rental:any) => (
                <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 content-center" key={rental._id}>
                    <table className="table-auto border-separate border-spacing-4 mt-1 text-gray-500 text-md font-sans"><tbody>
                    <tr><td className="font-bold">User ID</td><td>{rental.user}</td></tr>
                    <tr><td className="font-bold">Car</td><td>{rental.car.model}</td></tr>
                    <tr><td className="font-bold">Provider</td><td>{rental.provider}</td></tr>
                    <tr><td className="font-bold">Pickup Date</td><td>{rental.pickupDate}</td></tr>
                    <tr><td className="font-bold">Return Date</td><td>{rental.returnDate}</td></tr>
                    <tr><td className="font-bold">Is Paid?</td><td>{rental.isPaid.toString()}</td></tr>
                </tbody></table>
                <button className="block rounded-md bg-white text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white hover:border-transparent px-3 py-2 shadow-sm" name="RemoveBooking"
                onClick={() => removeHandler(rental._id)}>Remove this Rental</button>
                <button className="block rounded-md bg-white text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white hover:border-transparent px-3 py-2 mt-2 shadow-sm" name="EditBooking"
                onClick={() => {setEdit(true); setId(rental._id)}}>Edit this Rental</button>
                </div>
            )) : <div className="text-4xl font-bold font-serif mt-10 text-center text-white">No Car Rental</div>
        }
        </>
    )
}