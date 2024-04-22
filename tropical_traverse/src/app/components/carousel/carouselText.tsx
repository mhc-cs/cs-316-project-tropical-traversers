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
            <h3 className="travelText">Travel to Jamaica</h3>
            <button className='plan_trip' onClick={() => router.push("/driversPage")}>Book a driver</button>
        </div>
        </>
    );
}