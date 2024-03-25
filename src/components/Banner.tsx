'use client'
import styles from "./banner.module.css"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {

    const covers = ["/images/cover.jpg", "/images/cover2.jpg", "/images/cover3.jpg", "/images/cover4.jpg"]
    const [index, changeIndex] = useState(0)
    const router = useRouter()
    const { data:session } = useSession()

    return (
        <div className={styles.banner} onClick={() => {changeIndex(index+1)}}>
            <Image src={covers[index%4]}
            alt="cover"
            fill={true}
            priority/>
            <div className={styles.bannerText}>
                <h1 className="text-4xl font-bold font-serif">Vaccine Service Center</h1>
                <h3 className="text-md font-medium font-serif">It's Better to Vaccinate Than Never</h3>
            </div>
            {
                session? <div className="absolute top-5 right-10 font-semibold text-xl font-sans">
                    Welcome {session.user?.name}
                </div> : null
            }
            <button className="bg-white text-sky-500 border border-sky-500 font-semibold py-2 px-2 m-2 rounded absolute bottom-0 right-0
            hover:bg-sky-500 hover:text-white hover:border-transparent"
            onClick={(e) => { e.stopPropagation(); router.push("/hospital") }}>
                Select Hospital
            </button>
        </div>
    );
}