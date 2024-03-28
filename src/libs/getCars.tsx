export default async function getCars() {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars`)
    if(!response.ok){
        throw new Error("Failed to fetch car")
    }
    return await response.json()
}