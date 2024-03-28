"use client"
import DateReserve from "@/components/DateRental";
import { Select, MenuItem, LinearProgress } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState, useEffect, Suspense } from "react";
import getCars from "@/libs/getCars";
import createRental from "@/libs/createRental";
import { useSession } from "next-auth/react";
import getProviders from "@/libs/getProviders";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CarsItem,ProvidersItem } from "../../../interface";
export default function Booking() {

    const theme = createTheme({
        palette: {
            mode: 'dark'
          }
    })

    const session = useSession();
    if (!session || !session.data) return;
    
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
    const [providers, setProviders] = useState([])
    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)
    const [returnDate, setReturnDate] = useState<Dayjs|null>(null)
    const [cid, setCid] = useState<string>("")
    const [provider, setProvider] = useState<string>("")

    useEffect(() => {
        async function fetchCars() {
                const carsData = await getCars();
                setCars(carsData.data);
        }
        fetchCars()
    }, [])

    useEffect(() => {
        async function fetchProviders() {
                const providersData = await getProviders();
                setProviders(providersData.data);
        }
        fetchProviders()
    }, [])

    const handleClick = async () => {
        try {
            await createRental(cid, pickupDate, returnDate, provider, session.data.user.token);
            console.log("success")
            alert("Successfully created rental.")
        } catch (error) {
            alert("Failed creating rental.")
            console.error("Error fetching session:", error);
        }
    }

    return(
        <main className="flex flex-col items-center space-y-4 w-[100%] text-white">
            <ThemeProvider theme={theme}>
            <div className="text-4xl font-bold font-serif mt-10">Car Rental</div>
            {/*<table className="table-auto border-seperate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.telephoneNumber}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>*/}
            <Suspense fallback={<p className="my-10 text-center text-xl text-white font-semibold"> Loading rental form... <LinearProgress/></p>}>
            <h1 className="font-sans text-xl font-semibold mt-4">Car</h1>
            <Select variant="standard" name="car" id="car" className="h-[2em] w-[200px]" value={cid} onChange={(e) => {setCid(e.target.value)}}>
                {
                    cars.map((carItem:CarsItem) => (
                        <MenuItem key={carItem.id} value={carItem.id}>{carItem.model}</MenuItem>
                    ))
                }
            </Select>
            <h1 className="font-sans text-xl font-semibold mt-4">Provider</h1>
            <Select variant="standard" name="provider" id="provider" className="h-[2em] w-[200px]" value={provider} onChange={(e) => {setProvider(e.target.value)}}>
                {
                    providers.map((provider:ProvidersItem) => (
                        <MenuItem key={provider.name} value={provider.name}>{provider.name}</MenuItem>
                    ))
                }
            </Select>
            <h1 className="font-sans text-xl font-semibold mt-4">Pickup Date</h1>
            <DateReserve onChange={(value:Dayjs) => {setPickupDate(value)}}/>
            <h1 className="font-sans text-xl font-semibold mt-4">Return Date</h1>
            <DateReserve onChange={(value:Dayjs) => {setReturnDate(value)}}/>
            <button className="block rounded-md bg-white text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white hover:border-transparent px-3 py-2 shadow-sm" name="Create Rental" onClick={handleClick}>Create Rental</button>
            </Suspense>
            </ThemeProvider>
        </main>
    );
}