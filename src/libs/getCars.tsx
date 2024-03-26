export default async function getCars() {

    const response = await fetch("https://backend-supercarcare.vercel.app/api/v1/cars")
    if(!response.ok){
        throw new Error("Failed to fetch car")
    }
    return await response.json()
}