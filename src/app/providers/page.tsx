import getProviders from "@/libs/getProviders";
import ProvidersCatalog from "@/components/ProvidersCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default async function Providers(){

    const providers = await getProviders()

    return (
    <main>
        <h1 className="text-center p-10 text-4xl font-bold font-serif text-white">Providers</h1>
        <Suspense fallback={<p className="my-10 text-center text-xl text-white font-semibold"> Loading providers... <LinearProgress/></p>}>
            <ProvidersCatalog providersJson={providers}/>
        </Suspense>
    </main>
    );
}