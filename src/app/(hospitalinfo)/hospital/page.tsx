import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default async function Hospital(){

    const hospitals = await getHospitals()

    return (
    <main>
        <h1 className="text-center p-10 text-4xl font-bold font-serif">Select Hospital</h1>
        <Suspense fallback={<p className="mb-10 text-center text-lg"> Loading hospitals... <LinearProgress/></p>}>
            <HospitalCatalog hospitalsJson={hospitals}/>
        </Suspense>
    </main>
    );
}