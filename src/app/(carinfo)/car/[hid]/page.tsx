import Image from "next/image"
import getHospital from "@/libs/getCar"

export default async function hospitalDetail( {params} : { params:{hid:string} }) {

    const hospitalDetail = await getHospital(params.hid)

    /*
    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001", {name:"Chulalongkorn Hospital", image:"/images/chula.jpg"})
    mockHospitalRepo.set("002", {name:"Rajavithi Hospital", image:"/images/rajavithi.jpg"})
    mockHospitalRepo.set("003", {name:"Thammasat University Hospital", image:"/images/thammasat.jpg"})
    */

    return(
        <main>
            <div className="flex flex-row my-5 px-5">
                <Image src={ hospitalDetail.data.picture }
                alt="Hospital Image"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] m-10"/>
                <div>
                    <div className="text-2xl mt-10 font-bold font-sans">{hospitalDetail.data.name}</div>
                    <div className="text-lg mt-5">Address: {hospitalDetail.data.address}</div>
                    <div className="text-lg mt-1">Province: {hospitalDetail.data.province}</div>
                    <div className="text-lg mt-1">Postal Code: {hospitalDetail.data.postalcode}</div>
                    <div className="text-lg mt-1">Telephone Number: {hospitalDetail.data.tel}</div>
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