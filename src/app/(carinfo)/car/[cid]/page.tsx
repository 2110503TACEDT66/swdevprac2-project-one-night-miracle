import Image from "next/image"
import getCar from "@/libs/getCar"

export default async function carDetail( {params} : { params:{cid:string} }) {

    const carDetail = await getCar(params.cid)

    /*
    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001", {name:"Chulalongkorn Hospital", image:"/images/chula.jpg"})
    mockHospitalRepo.set("002", {name:"Rajavithi Hospital", image:"/images/rajavithi.jpg"})
    mockHospitalRepo.set("003", {name:"Thammasat University Hospital", image:"/images/thammasat.jpg"})
    */

    return(
        <main>
            <div className="flex flex-row my-5 px-5 content-center text-white">
                <Image src={ carDetail.data.picture }
                alt="Car Image"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] m-10"/>
                <div>
                    <div className="text-2xl mt-10 font-bold font-sans">{carDetail.data.model}</div>
                    <div className="text-lg mt-5 font-medium">Car ID: {carDetail.data.carid}</div>
                    <div className="text-lg mt-1 font-medium">Price Rate: {carDetail.data.pricerate}</div>
                    <div className="text-lg mt-1 font-medium">Car Type: {carDetail.data.cartype}</div>
                    <div className="text-lg mt-1 font-medium">Number of Seats: {carDetail.data.numberofseat}</div>
                    <div className="text-lg mt-1 font-medium">Gear System: {carDetail.data.gearsystem}</div>
                   
                </div>
            </div>
        </main>
    );
}

/*
export async function generateStaticParams() {
    return [{cid:"001"}, {cid:"002"}, {cid:"003"}]
}
*/