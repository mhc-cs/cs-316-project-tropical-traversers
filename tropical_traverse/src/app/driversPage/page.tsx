"use client";


import destination1 from "../assets/top_destinations/dest1.jpg";  //import pictures here 
import destination2 from "../assets/top_destinations/dest2.jpg";
import destination3 from "../assets/top_destinations/dest3.jpg";
import destination4 from "../assets/top_destinations/dest4.jpg";
import destination5 from "../assets/top_destinations/dest5.jpg";
import destination6 from "../assets/top_destinations/dest6.jpg";
import { StaticImageData } from "next/image";
import { useState } from "react";
import Image from 'next/image';
import "./driversPage.css";
import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";

export default function Page() {

    const destImages = [
        { src: destination1, name: "Shanique", car: "Toyota Corolla", trips: 150, rating: 4.8, experience: 5 },
        { src: destination2, name: "Malik", car: "Honda Civic", trips: 200, rating: 4.9, experience: 3 },
        { src: destination3, name: "Aaliyah", car: "Nissan Versa", trips: 100, rating: 4.7, experience: 4 },
        { src: destination4, name: "Jermaine", car: "Mitsubishi Outlander", trips: 300, rating: 4.6, experience: 6 },
        { src: destination5, name: "Tashana", car: "Kia Rio", trips: 250, rating: 4.5, experience: 7 },
        { src: destination6, name: "Michael", car: "Hyundai Elantra", trips: 180, rating: 4.6, experience: 4 }];
      
      type ImageSliderProps = {
        imageURLs: StaticImageData[]
      }

    return (
      <>
      <div className="main-container">
      <NavBar/>
        <div className="topest_container">
            <span className="title">Top drivers</span>
            </div>
            <div className="main-wrapper">
            {destImages.map((imageUrl, index) => (
                <div key={index} className='image-wrapper1'>
                    <div className="image-container1">
                        <Image className='image1'  src={imageUrl.src} alt={'user profile'}/>
                    </div>
                    <span className="driver-name">{imageUrl.name}</span>
                    <span className='car'>{imageUrl.car}</span>
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
