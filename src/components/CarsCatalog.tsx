import Card from "./Card";
import Link from "next/link";
import { CarsItem , CarsJson } from "../../interface";
export default async function CarCatalog({carsJson} : {carsJson:CarsJson}) {

    const carsJsonReady = await carsJson

    return (
        <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    carsJsonReady.data.map((carsItem:CarsItem) => (
                        <Link href={`/car/${carsItem.id}`} className="w-1/5 mb-10 mx-1" key={carsItem.model}>
                        <Card carName={carsItem.model} imgSrc={carsItem.picture}/>
                        </Link>
                    ))
                }
            </div>
    );
}