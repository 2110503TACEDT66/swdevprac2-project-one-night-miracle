import getCars from "@/libs/getCars";
import CarsCatalog from "@/components/CarsCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { CarsJson } from "../../../../interface";

export default async function Car(){

    const cars:CarsJson = await getCars()

    return (
    <main>
        <h1 className="text-center p-10 text-4xl font-bold font-serif text-white">Select Car</h1>
        <Suspense fallback={<p className="my-10 text-center text-xl text-white font-semibold"> Loading cars... <LinearProgress/></p>}>
            <CarsCatalog carsJson={cars}/>
        </Suspense>
    </main>
    );
}