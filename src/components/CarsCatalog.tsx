import Card from "./Card";
import Link from "next/link";

export default async function CarCatalog({carsJson} : {hospitalsJson:Promise<CarsJson>}) {

    const carsJsonReady = await carsJson

    return (
        <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    carsJsonReady.data.map((carsItem:any) => (
                        <Link href={`/hospital/${carsItem.id}`} className="w-1/5" key={carsItem.name}>
                        <Card carName={carsItem.name} imgSrc={carsItem.picture}/>
                        </Link>
                    ))
                }
            </div>
    );
}