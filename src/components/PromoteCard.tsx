'use client'
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";


export default function PromoteCard() {

    const [playing, setPlaying] = useState(true)

    useWindowListener("contextmenu", (e) => {e.preventDefault()})

    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-sky-200 flex flex-row content-center">
            <VideoPlayer vdoSrc="/vdo/getvaccine.mp4" isPlaying={playing}/>
            <div className="m-5"><h1 className="font-sans font-semibold text-lg text-sky-700">Get your SuperCar today!</h1>
            <div><button className="bg-white text-sky-500 border border-sky-500 font-semibold py-2 px-2 mt-2 rounded z-30 hover:bg-sky-500 hover:text-white hover:border-transparent"
            onClick={() => {setPlaying(!playing)}}>
                {playing? "Pause" : "Play"}
            </button></div>
            </div>
        </div>
    );
}