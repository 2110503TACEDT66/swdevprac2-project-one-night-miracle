export default async function getProviders() {

    const response = await fetch("https://backend-supercarcare.vercel.app/api/v1/providers")
    if(!response.ok){
        throw new Error("Failed to fetch providers")
    }
    return await response.json()
}