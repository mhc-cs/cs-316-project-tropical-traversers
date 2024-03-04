"use client"; //this tells the client

import './carousel.css'
import { useState } from "react";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from 'next/image';

type ImageSliderProps = {
    imageURLs: StaticImageData[]
}

export default function Carousel({ imageURLs }: ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0)

    return(
        <>
        <div className="slider">
            <Image className="slider_image" src={imageURLs[imageIndex]} alt={'company logo'}/> 
            <button><ArrowBigLeft/></button>
            <button><ArrowBigRight/></button>
        </div>
        </>
    );
}