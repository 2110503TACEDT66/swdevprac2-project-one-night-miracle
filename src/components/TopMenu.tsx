import Image from "next/image";
import styles from "./topmenu.module.css"
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className={`${styles.menucontainer} font-semibold text-white text-sm`}>
            <Link href='/'><Image src={"/images/logosupercarcare.png"} className={styles.logoimg} alt="logo" width={0} height={0} sizes="200vh"/></Link>
            <TopMenuItem title="Rental" pageRef="/rental"/>
            <TopMenuItem title="Providers" pageRef="/providers"/>
            <div className="flex flex-row absolute left-0 h-full content-center">
                {
                    session? "" : <Link href='/signup'> 
                    <div className="flex items-center h-full px-5 ml-5 font-semibold text-white">
                        Sign-Up
                    </div>
                </Link>
                }
                {
                    session? <Link href="/api/auth/signout">
                        <div className="flex items-center h-full px-5 ml-5 font-semibold text-white">Sign-Out</div>
                    </Link>
                    : <Link href="/api/auth/signin">
                        <div className="flex items-center h-full px-5 ml-5 font-semibold text-white">Sign-In</div>
                    </Link>
                }
                <TopMenuItem title="My Rental" pageRef="/myrental"/>
            </div>
        </div>
    );
}