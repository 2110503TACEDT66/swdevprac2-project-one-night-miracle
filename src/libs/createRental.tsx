import { Dayjs } from "dayjs"

export default async function createRental(cid:string, pickupDate:(Dayjs|null), returnDate:(Dayjs|null), token:string) {
    const response = await fetch(`https://backend-supercarcare.vercel.app/api/v1/cars/${cid}/rental`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            pickupDate: pickupDate,
            returnDate: returnDate,
        })
    })

    if(!response.ok){
        throw new Error("Failed to create rental.")
    }
    return await response.json()
}