import { Button, TextField } from "@mui/material"
export default function signUpPage(){
    return(
        <div className="flex flex-col items-center mt-28">
            <div className='mb-5'><TextField variant="outlined" label='Name' className="my-5"/></div>
            <div className='mb-5'><TextField variant="outlined" label='Email'/></div>
            <div className='mb-5'><TextField variant="outlined" label='Phone No'/></div>
            <div className='mb-5'><TextField variant="outlined" label='Password'/></div>
            <Button variant="contained">Sign Up</Button>
        </div>
    )
}