import Card from "./Card";
import Link from "next/link";

export default async function HospitalCatalog({hospitalsJson} : {hospitalsJson:Promise<HospitalJson>}) {

    const hospitalsJsonReady = await hospitalsJson

    return (
        <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    hospitalsJsonReady.data.map((hospitalItem) => (
                        <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5" key={hospitalItem.name}>
                        <Card hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture}/>
                        </Link>
                    ))
                }
            </div>
    );
}