import RentalsList from "@/components/RentalsList";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function myRentalsList() {
    return (
        <main>
            <Suspense fallback={<p className="my-10 text-center text-xl text-white font-semibold"> Loading providers... <LinearProgress/></p>}>
            <RentalsList/>
            </Suspense>
        </main>
    )
}