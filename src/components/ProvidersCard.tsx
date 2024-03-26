'use client'
import InteractiveCard from "./InteractiveCard";
import Image from "next/image"

export default function ProvidersCard({name, address, tel, imgSrc } : {name:string, address:string, tel:string, imgSrc:string}) {

    return (
        <InteractiveCard>
            <div className="w-full h-[60%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt="Provider Image"
                fill={true}
                sizes="100"
                className="object-cover rounded-t-lg"/>
            </div>
            <div className="w-full h-[40%] p-[10px]">
                <div className="font-bold">{name}</div>
                <div className="font-normal">
                    Address: {address}
                </div>
                <div className="font-normal">
                    Telephone Number: {tel}
                </div>
                </div>
        </InteractiveCard>
    );
}