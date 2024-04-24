'use client';

import "../navBar/navbar.css";
import "./carousel.css";
import router, { useRouter } from "next/navigation";

export default function carouselText(){

    const router = useRouter();

    return(
        <>
        <div>
            <h1 className="welcomeText">Wa gwan</h1>
            <h3 className="travelText">Easy travels in Jamaica</h3>
            <button className='plan_trip' onClick={() => router.push("/bookDriver")}>Book a driver</button>
        </div>
        </>
    );
}