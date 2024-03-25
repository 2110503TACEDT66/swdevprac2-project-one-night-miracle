'use client'
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel() {

    const initialRatings = new Map<string,(number | null)>([['Chulalongkorn Hospital', 5],  ['Rajavithi Hospital', 5], ['Thammasat University Hospital', 5]])

    const ratingReducer = ( ratingList:Map<string,(number | null)>, action:{type:string, hospitalName:string, stars:(number | null)}) => {
        switch(action.type){
            case "add":{
                if(ratingList.get(action.hospitalName) !== undefined) return new Map(ratingList.set(action.hospitalName, action.stars))
            }
            case "remove":{
                ratingList.delete(action.hospitalName)
                return new Map(ratingList)
            }
            default: return ratingList
        }
    }

    const [ ratingList, dispatchRating ] = useReducer(ratingReducer, initialRatings)

    const mockHospitalRepo = [
        {hid:"001", name:"Chulalongkorn Hospital", image:"/images/chula.jpg"},
        {hid:"002", name:"Rajavithi Hospital", image:"/images/rajavithi.jpg"},
        {hid:"003", name:"Thammasat University Hospital", image:"/images/thammasat.jpg"}
    ]

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    mockHospitalRepo.map((hospital) => (
                        <Link href={`/hospital/${hospital.hid}`} className="w-1/5" key={hospital.name}>
                        <Card hospitalName={hospital.name} imgSrc={hospital.image}
                        onRating={(hospital:string, star:(number | null)) => dispatchRating({type:"add", hospitalName:hospital, stars:star})}/>
                        </Link>
                    ))
                }
            </div>
            <div className="text-center font-mono font-bold text-xl"><h1>Hospital Ratings: </h1></div>
            {Array.from(ratingList).map( (hospital) => <div data-testid={hospital[0]} className="text-center font-serif text-md"
            onClick={() => dispatchRating({type:"remove", hospitalName:hospital[0], stars:hospital[1]})} key={hospital[0]}>
                {hospital[0]} Rating : {hospital[1]}</div>)}
        </div>
    );
}