"use client";

import destination1 from "../assets/top_destinations/dest1.jpg";  //import pictures here 
import destination2 from "../assets/top_destinations/dest2.jpg";
import destination3 from "../assets/top_destinations/dest3.jpg";
import destination4 from "../assets/top_destinations/dest4.jpg";
import destination5 from "../assets/top_destinations/dest5.jpg";
import destination6 from "../assets/top_destinations/dest6.jpg";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import Image from 'next/image';
import "./driversPage.css";
import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";
import Filter from "../components/filter/filter"

import axios from 'axios'


interface Driver{
  nameF: string;
  nameL:string;
  username: string;
  email: string;
  password: string;
  vehicle: string;
  license: string;
  location: string;
  stateID: string;
  licenseImg: string;
  type: string;
  drives: number;
  rating: number;
  exp: number;
}

interface ImageData {
  src: StaticImageData;
  name: string;
  vehicle: string;
  trips: number;
  rating: number;
  experience: number;
}

export default function Page() {

  //Collects driver accounts
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [destImages, setDestImages] = useState<ImageData[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/userAccounts')
    .then((response) => {
      const driverData: Driver[] = response.data;
      //comapision based sorting of driver accounts based on rating
      const sortedDrivers = driverData.sort((a: Driver, b: Driver) => b.rating - a.rating);
      //setDrivers(sortedDrivers);

      const formattedData = sortedDrivers.map((driver,index) => {
        const src = [
          destination1,
          destination2,
          destination3,
          destination4,
          destination5,
          destination6,
        ][index % 6];

        return {
          src,
          name:`${driver.nameF} ${driver.nameL}`,
          vehicle: driver.vehicle,
          trips: driver.drives,
          rating: driver.rating,
          experience: driver.exp,
        };
      });

      setDestImages(formattedData);
    })
    .catch(err => console.log(err))
  }, [])

      // type ImageSliderProps = {
      //   imageURLs: StaticImageData[]
      // }

    return (
      <>
      <div className="main-container">
      <NavBar isLoggedIn={true}/>
      <Filter/>
        <div className="topest_container">
            <span className="title">Top Drivers</span>
            </div>
            <div className="main-wrapper">
            {destImages.map((imageUrl, index) => (
                <div key={index} className='image-wrapper1'>
                    <div className="image-container1">
                        <Image className='image1'  src={imageUrl.src} alt={'user profile'}/>
                    </div>
                    <span className="driver-name">{imageUrl.name}</span>
                    <span className='car'>{imageUrl.vehicle}</span>
                    <div className="driver-credentials">
                        <div className="trips-wrappper">
                            <span className='trips'>{imageUrl.trips}</span>
                            <p className="trips-name">Total Trips</p>
                        </div>
                        <div className="rating-wrapper">
                            <span className='rating'>{imageUrl.rating}</span>
                            <p className="rating-name">Rating</p>
                        </div>
                        <div className="experience-wrapper">
                            <span className='experience'>{imageUrl.experience}</span>
                            <p className="experience-name">Experience</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      <Footer/>
      </div>
      </>
    );
  }
