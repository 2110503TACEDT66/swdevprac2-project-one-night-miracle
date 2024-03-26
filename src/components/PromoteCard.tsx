'use client'
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";


export default function PromoteCard() {

    
    const [playing1, setPlaying1] = useState(false);
    const [playing2, setPlaying2] = useState(false);

    useWindowListener("contextmenu", (e) => {e.preventDefault()})

    return (
        <div className="flex flex-row">

  <div className="w-[80%] shadow-lg mx-[5%] my-10 p-2 rounded-lg bg-pink-200 flex flex-row content-center">
    <VideoPlayer vdoSrc="/vdo/car.mp4" isPlaying={playing1}/>
    <div className="m-5">
      <h1 className="font-sans font-semibold text-lg text-sky-700">Get your SuperCar today!</h1>
      <div>
        <button className="bg-white text-sky-500 border border-sky-500 font-semibold py-2 px-2 mt-2 rounded z-30 hover:bg-sky-500 hover:text-white hover:border-transparent"
          onClick={() => {setPlaying1(!playing1)}}>
          {playing1? "Pause" : "View"}
        </button>
      </div>
    </div>
  </div>
  

  <div className="w-[80%] shadow-lg mx-[5%] my-10 p-2 rounded-lg bg-sky-200 flex flex-row content-center">
    <VideoPlayer vdoSrc="/vdo/car2.mp4" isPlaying={playing2}/>
    <div className="m-5">
      <h1 className="font-sans font-semibold text-lg text-sky-700">Own the beauty of your car right now!</h1>
      <div>
        <button className="bg-white text-sky-500 border border-sky-500 font-semibold py-2 px-2 mt-2 rounded z-30 hover:bg-sky-500 hover:text-white hover:border-transparent"
          onClick={() => {setPlaying2(!playing2)}}>
          {playing2? "Pause" : "View"}
        </button>
      </div>
    </div>
  </div>
</div>

    );
}