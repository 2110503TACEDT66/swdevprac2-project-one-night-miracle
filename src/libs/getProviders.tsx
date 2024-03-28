export default async function getProviders() {

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/providers`)
    if(!response.ok){
        throw new Error("Failed to fetch providers")
    }
    return await response.json()
}