import { Dayjs } from "dayjs"

export default async function editRental(rid:string, pickupDate:(Dayjs|null), returnDate:(Dayjs|null), provider:string, cid:string, token:string) {
    const response = await fetch(`https://backend-supercarcare.vercel.app/api/v1/rental/${rid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            pickupDate: pickupDate,
            returnDate: returnDate,
            provider: provider,
            car: cid
        })
    })

    if(!response.ok){
        throw new Error("Failed to edit rental.")
    }
    return await response.json()
}