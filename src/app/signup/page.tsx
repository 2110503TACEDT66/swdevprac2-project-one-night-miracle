'use client'
import { Button, TextField } from "@mui/material"
import userSignUp from "@/libs/userSignUp"
import { useState } from "react"
import { useRouter } from "next/navigation"
import userLogIn from "@/libs/userLogIn"
import {FormControl} from "@mui/material"
import {InputLabel} from "@mui/material"
import { OutlinedInput } from "@mui/material"
import { InputAdornment, IconButton } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function signUpPage(){
    const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setphone] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const handleSignUp= async()=>{
        console.log(name, email, phoneNo, password)
        try{
        await userSignUp(name, email, phoneNo, password);
        alert('Sign-up success')
        // await userLogIn(email, password)
        router.push('/api/auth/signin');
    }
        catch(error){
            alert('Sign-up failed')
            console.error('signup failed', error)
            console.log('error')
        }
    }
    
    return(
        <div className="flex flex-col items-center mx-auto py-5 mt-28 bg-gray-200 w-[70%] rounded-lg">
            <div className='mb-5'>
                <TextField variant="outlined" label='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className='mb-5'>
                <TextField variant="outlined" label='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='mb-5'>
                <TextField variant="outlined" label='Phone No' value={phoneNo} onChange={(e)=>{setphone(e.target.value)}} placeholder="Format: 000-000-0000"/>
            </div>
            {/* <div className='mb-5'>
                <TextField variant="outlined" label='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div> */}
            <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            placeholder="at least 6 character"
          />
        </FormControl>
            <Button variant="contained" onClick={handleSignUp} className='bg-white text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white hover:border-transparent mt-10'>Sign Up</Button>
        </div>
    )
}