"use client"; //this tells the client

import './carousel.css'
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from 'next/image';
import './button.css';
import CarouselText from "./carouselText";

type ImageSliderProps = {
    imageURLs: StaticImageData[]
}

export default function Carousel({ imageURLs }: ImageSliderProps){
    const [imageIndex, setImageIndex] = useState(0)

    // function with algorithm to move a current image to the previous image
    function previousImage(){
        setImageIndex( index => {
            if (imageIndex === 0) return imageURLs.length - 1
            else return index - 1
        })
    }

    // function with algorithm to move a current image to the next image
    function nextImage(){
        setImageIndex( index  => {
            if (imageIndex === imageURLs.length - 1) return 0
            else return index + 1
        })
    }

    return(
        <>
        <div className="carousel">
            <Image className="carousel_image" src={imageURLs[imageIndex]} alt={'company logo'}/> 
            <button onClick={previousImage} className="carousel_button left"><ChevronLeft/></button>
            <button onClick={nextImage} className="carousel_button right"><ChevronRight/></button>
            <div className="carouselText">
                <CarouselText/>
            </div>
        </div>
        </>
    );
}