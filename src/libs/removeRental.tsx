export default async function removeRental(token:string, rid:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/rental/${rid}`, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if(!response.ok){
        throw new Error("Failed to delete rental.")
    }
    return true
}