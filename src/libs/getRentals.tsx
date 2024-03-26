export default async function getRentals(token:string) {
    const response = await fetch("https://backend-supercarcare.vercel.app/api/v1/rental", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if(!response.ok){
        throw new Error("Failed to fetch rentals.")
    }
    return await response.json()
}