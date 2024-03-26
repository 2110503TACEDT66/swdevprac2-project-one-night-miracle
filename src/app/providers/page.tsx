import getProviders from "@/libs/getProviders";
import ProvidersCatalog from "@/components/ProvidersCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default async function Providers(){

    const providers = await getProviders()

    return (
    <main>
        <h1 className="text-center p-10 text-4xl font-bold font-serif">Providers</h1>
        <Suspense fallback={<p className="mb-10 text-center text-lg"> Loading providers... <LinearProgress/></p>}>
            <ProvidersCatalog providersJson={providers}/>
        </Suspense>
    </main>
    );
}