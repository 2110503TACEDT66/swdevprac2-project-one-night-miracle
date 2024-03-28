export default async function userSignUp(name: string, email:string, phoneNo:string, password:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            telephoneNumber : phoneNo,
            email: email,
            password: password,
            role: 'user'
        })
    })

    if(!response.ok){
        throw new Error("Failed to sign up.")
    }
    return await response.json()
}