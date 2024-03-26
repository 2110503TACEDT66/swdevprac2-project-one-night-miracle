'use client'
import { Button, TextField } from "@mui/material"
import userSignUp from "@/libs/userSignUp"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function signUpPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setphone] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const handleSignUp= async()=>{
        console.log(name, email, phoneNo, password)
        try{
        await userSignUp(name, email, phoneNo, password);
        alert('signup succeed')
        router.push('/');
    }
        catch(error){
            alert('SignUp failed')
            console.error('signup failed', error)
            console.log('error')
        }
    }
    
    return(
        <div className="flex flex-col items-center mt-28 bg-white">
            <div className='mb-5'>
                <TextField variant="outlined" label='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className='mb-5'>
                <TextField variant="outlined" label='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='mb-5'>
                <TextField variant="outlined" label='Phone No' value={phoneNo} onChange={(e)=>{setphone(e.target.value)}}/>
            </div>
            <div className='mb-5'>
                <TextField variant="outlined" label='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
        </div>
    )
}