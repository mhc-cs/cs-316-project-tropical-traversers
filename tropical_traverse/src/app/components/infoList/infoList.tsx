"usecllient";

import { ChevronRight, ChevronLeft } from "lucide-react";
import './infoList.css'
import Item from  "../infolistitem/infoListItem";
import destination1 from "../../assets/top_destinations/dest1.jpg";
import destination2 from "../../assets/top_destinations/dest2.jpg";
import destination3 from "../../assets/top_destinations/dest3.jpg";
import destination4 from "../../assets/top_destinations/dest4.jpg";
import destination5 from "../../assets/top_destinations/dest5.jpg";
import destination6 from "../../assets/top_destinations/dest6.jpg";
import { StaticImageData } from "next/image";
import { useState } from "react";
import Image from 'next/image';

const destImages = [destination1, destination2, destination3, destination4, destination5, destination6]

type ImageSliderProps = {
  imageURLs: StaticImageData[]
}

export default function topThings(){
    return (
        <>
        <div className="top_container">
          <span className="title">Top Destinations</span>
        </div>
        <div className="wrapper">
          <button className=""><ChevronLeft/></button>
          <Item/>
          <button className=""><ChevronRight/></button>
        </div>
        </>
      );
}
