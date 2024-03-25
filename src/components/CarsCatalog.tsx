import Card from "./Card";
import Link from "next/link";

export default async function CarCatalog({carsJson} : {carsJson:Promise<CarsJson>}) {

    const carsJsonReady = await carsJson

    return (
        <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    carsJsonReady.data.map((carsItem:CarsItem) => (
                        <Link href={`/hospital/${carsItem.id}`} className="w-1/5 mb-10" key={carsItem.model}>
                        <Card carName={carsItem.model} imgSrc={carsItem.picture}/>
                        </Link>
                    ))
                }
            </div>
    );
}