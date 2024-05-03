"use client";

import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";
import profile from "../assets/profiles/profile1.jpg";
import bg from "../assets/profiles/bg_profile.jpg";
import Image from 'next/image';
import "./profilePage.css";
import Rating from '@mui/material/Rating';
import { useEffect, useState, useContext } from "react";
import axios from "axios";

//import context of account information
import {useAccount} from '../context/AuthContext';

interface User{
    username: string;
}

interface Driver{
    nameF: string;
    nameL: string;
    location: string;
    model: string;
    trips: number;
    experience: number;
    username: string;
    email: string;
    license: string;
}

// const componentName = () => {
//     const[value, setValue] = useState<string | null>(null);
//     useEffect(() => {
//         const storedValue = localStorage.getItem('user');
//         if (storedValue){
//             try{
//                 const parsedValue: User = JSON.parse(storedValue);
//                 if(parsedValue.username){
//                     setValue(parsedValue.username);
//                 }
//             }catch (error){
//                 console.error("Error parsing:", error);
//             }
//         }
//     }, []);
// };

const ProfilePage: React.FC = () => {
    //const{user}=useAccount();
    const [driverData, setDriverData] = useState<Driver | null>(null);
    
    //const [value, setValue] = useState(null);

    const[value, setValue] = useState<string | null>(null);
    useEffect(() => {
        const storedValue = localStorage.getItem('user');
        if (storedValue){
            try{
                const parsedValue: User = JSON.parse(storedValue);
                if(parsedValue.username){
                    setValue(parsedValue.username);
                }
            }catch (error){
                console.error("Error parsing:", error);
            }
        }
    }, []);

    useEffect(() => {
        if (value) {
          axios.get('http://localhost:5000/accountDisplay', {params: {username: value} })
            .then((response) => {
                
                if (response.status === 210) {
                    setDriverData(response.data)
                } else {
                    console.warn('Unexpected response status:', response.status);
                    setDriverData(null)
                }
            })
            .catch((error) => {
                console.error('Error fetching driver data:', error);
            });
        }
      }, [value]);

      if (!driverData) {
        return <p>Loading...</p>;
      }

      return (
        <div className="profilePage-wrapper">
          <NavBar isLoggedIn={!!driverData.username} />
          <Image src={bg} alt="profile background" className="bg" />
          <Image src={profile} alt="profile picture" className="profile_pic" />
          <div>
                        <div className='profle-wrapper'>
                            <div className="under-image">
                                <p className="full-name">{driverData.nameF} {driverData.nameL}</p>
                                <p className="locality">{driverData.location}</p>
                                <p className="rating-driverr"><Rating name="read-only" value={5} readOnly size="large"/></p>
                                <div className="lower-bar-wrapper">
                                    <div className="trips-profile">
                                        <p>{driverData.trips}</p>
                                        <span className="label">Trips</span>
                                    </div>
                                    <div className="experience-profile">
                                        <p className="expereicne-years">{driverData.experience}</p>
                                        <span className="label">Experience (Yrs)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-wrapper-wrapper">
                                <div className="username-wrapper wp left">
                                    <p>Username</p>
                                    <p className="in">{driverData.username}</p>
                                </div>
                                <div className="email-wrapperd wp right">
                                    <p>Email address</p>
                                    <p className="in">{driverData.email}</p>
                                </div>
                            </div>
                            <div className="form-wrapper-wrapper wp left">
                                <div className="firstname-wrapper">
                                    <p>First name</p>
                                    <p className="in">{driverData.nameF}</p>
                                </div>
                                <div className="lastname-wrapper wp right">
                                    <p>Last name</p>
                                    <p className="in">{driverData.nameL}</p>
                                </div>
                            </div>
                            <div className="form-wrapper-wrapper wp left">
                                <div className="vehicle-wrapper">
                                    <p>Vehicle Model</p>
                                    <p className="in">{driverData.model}</p>
                                </div>
                                <div className="lisence-wrapper wp right">
                                    <p>Lisence Number</p>
                                    <p className="in">{driverData.license}</p>
                                </div>
                            </div>
                            <div className="aboutme-wrapper">
                                <label htmlFor="">About Me</label>
                                <textarea className="about-me" name="about-me" id=""></textarea>
                            </div>
                        </div>
            </div>
          <Footer />
        </div>
      );


//     export default function Page() {
//     return (
//         <>
//         <div className="profilePage-wrapper">
//             <NavBar isLoggedIn={false}/>
//             <Image src={bg} alt="profile background" className="bg" />
//             <Image src={profile} alt="profile picture" className="profile_pic" />
//             <div>
//                 {interface.map((info, index) => (
//                         <div key={index} className='profle-wrapper'>
//                             <div className="under-image">
//                                 <p className="full-name">{info.firstName} {info.lastName}</p>
//                                 <p className="locality">{info.locality}</p>
//                                 <p className="rating-driverr"><Rating name="read-only" value={5} readOnly size="large"/></p>
//                                 <div className="lower-bar-wrapper">
//                                     <div className="trips-profile">
//                                         <p>{info.trips}</p>
//                                         <span className="label">Trips</span>
//                                     </div>
//                                     <div className="experience-profile">
//                                         <p className="expereicne-years">{info.experience}</p>
//                                         <span className="label">Experience (Yrs)</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="form-wrapper-wrapper">
//                                 <div className="username-wrapper wp left">
//                                     <p>Username</p>
//                                     <p className="in">{info.username}</p>
//                                 </div>
//                                 <div className="email-wrapperd wp right">
//                                     <p>Email address</p>
//                                     <p className="in">{info.email}</p>
//                                 </div>
//                             </div>
//                             <div className="form-wrapper-wrapper wp left">
//                                 <div className="firstname-wrapper">
//                                     <p>First name</p>
//                                     <p className="in">{info.firstName}</p>
//                                 </div>
//                                 <div className="lastname-wrapper wp right">
//                                     <p>Last name</p>
//                                     <p className="in">{info.lastName}</p>
//                                 </div>
//                             </div>
//                             <div className="form-wrapper-wrapper wp left">
//                                 <div className="vehicle-wrapper">
//                                     <p>Vehicle Model</p>
//                                     <p className="in">{info.car}</p>
//                                 </div>
//                                 <div className="lisence-wrapper wp right">
//                                     <p>Lisence Number</p>
//                                     <p className="in">{info.lisenceNo}</p>
//                                 </div>
//                             </div>
//                             <div className="aboutme-wrapper">
//                                 <label htmlFor="">About Me</label>
//                                 <textarea className="about-me" name="about-me" id=""></textarea>
//                             </div>
//                         </div>
//                     ))}
//             </div>
//             <Footer/>
//         </div>
//         </>
//     );
//     }
}

export default ProfilePage;