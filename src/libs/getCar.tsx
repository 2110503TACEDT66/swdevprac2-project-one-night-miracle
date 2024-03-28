export default async function getCar(cid:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars/${cid}`)
    if(!response.ok){
        throw new Error("Failed to fetch car.")
    }
    return await response.json()
}