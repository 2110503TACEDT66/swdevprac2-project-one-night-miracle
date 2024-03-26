'use client'
import styles from "./banner.module.css"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {

    const covers = ["/images/car1.jpeg", "/images/car2.jpeg", "/images/car3.jpeg", "/images/car4.jpeg"]
    const [index, changeIndex] = useState(0)
    const router = useRouter()
    const { data:session } = useSession()

    return (
        <div className={styles.banner} onClick={() => {changeIndex(index+1)}}>
            <Image src={covers[index%4]}
            alt="car"
            fill={true}
            priority/>

            <div className={styles.bannerText}>
                <h1 className="text-4xl font-bold font-serif">SuperCarCare Rental Service</h1>
                <h3 className="text-md font-medium font-serif">"Welcome to our car rental shop"</h3>
            </div>

            {
                session? <div className="absolute top-5 right-10 font-semibold text-xl font-sans">
                    Welcome {session.user?.name}
                </div> : null
            }
          
           <div className="flex justify-center" >
           <button className="bg-black text-white-500 border border-grey-500 font-sport
            py-2 px-2 m-2 rounded absolute bottom-0 rounded
            hover:bg-orange-400 hover:text-white hover:border-transparent"
            onClick={(e) => { e.stopPropagation(); router.push("/car") }}>
                Select  Your SuperCar
            </button>
           </div>
       
        </div>
    );
}