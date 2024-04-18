"useclient";

import './infoList.css';
import destination1 from "../../assets/top_destinations/dest1.jpg";
import destination2 from "../../assets/top_destinations/dest2.jpg";
import destination3 from "../../assets/top_destinations/dest3.jpg";
import destination4 from "../../assets/top_destinations/dest4.jpg";
import destination5 from "../../assets/top_destinations/dest5.jpg";
import destination6 from "../../assets/top_destinations/dest6.jpg";
import { StaticImageData } from "next/image";
import { useState } from "react";
import Image from 'next/image';

const destImages = [
  {src: destination1, caption:"Kingston"}, 
  {src: destination2, caption:"Montego Bay"}, 
  {src: destination3, caption:"Negril"}, 
  {src: destination4, caption:"Falmouth"}, 
  {src: destination5, caption:"Ocho Rios"}, 
  {src: destination6, caption:"Portmore"}];

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
          {destImages.map((imageUrl, index) => (
            <div key={index} className='image-wrapper'>
              <Image className='image'  src={imageUrl.src} alt={imageUrl.caption}/>
              <span className='destination-name'>{imageUrl.caption}</span>
            </div>
          ))}
        </div>
        </>
      );
}
