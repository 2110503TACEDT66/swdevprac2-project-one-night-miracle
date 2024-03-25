'use client'
import InteractiveCard from "./InteractiveCard";
import Image from "next/image"
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Card({hospitalName, imgSrc, onRating} : {hospitalName:string, imgSrc:string, onRating?:Function}) {

    const [stars, setStars] = useState<number | null>(5);

    const handleRatingChange = (newStars:number | null) => {
        if(newStars == null) newStars = 0
        if(onRating !== undefined){
            setStars(newStars)
            onRating(hospitalName, newStars)
        }
    }

    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt="About Vaccine"
                fill={true}
                className="object-cover rounded-t-lg"/>
            </div>
            <div className="w-full h-[30%] p-[10px] font-semibold">
                {hospitalName}
                {
                    onRating? <div><Rating id={`${hospitalName} Rating`} name={`${hospitalName} Rating`} data-testid={`${hospitalName} Rating`}
                    value={stars}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e, newStars) => { handleRatingChange(newStars) }}/></div> : ""
                }
                </div>
        </InteractiveCard>
    );
}