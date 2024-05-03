'use client';

import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import "./bookDriver.css";
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import CarAnimation from "../assets/moving_car.json";

// {driverName}:{driverNanme:string}

type ValuePiece = Date | null;  //for the date
type Value = ValuePiece | [ValuePiece, ValuePiece];  //for the date

export default function Page() {

  const size = Array.from({ length: 100 }, (_, index) => index + 1);
  const [value, onChange] = useState<Value>(new Date());


  return (
    <>
    <div className="page-wrapper">
      <NavBar isLoggedIn={false}/>
      
        <div className="bookDriver-wrapper">
        <div>
        <h1 className="bookDriver-title">Book a driver</h1>
        <p className="subtext">Your one-stop shop to all your travel needs</p>
      </div>
          <div className="dates-from-to">
            <div className="date-to">
              <p className="from-to">From</p>
              <DatePicker className="datepicker" onChange={onChange} value={value} />
            </div>
            <div className="date-to">
              <p className="from-to">To</p>
              <DatePicker className="datepicker" onChange={onChange} value={value} />
            </div>
          </div>
          <div className="basic-info">
            <div className="name wrapperd">
              <label className="second-row-label" htmlFor="">Name</label>
              <input type="text" placeholder="Nam nam" className="second-row"/>
            </div>
            <div className="phone wrapperd">
              <label className="second-row-label" htmlFor="">Phone Number</label>
              <input type="text" placeholder="+1(700)2455689" className="second-row"/>
            </div>
            <div className="wrapperd">
              <p className="second-row-label">Location</p>
              <select name="selected" className="second-row place">
                <option value="Select">Select One</option>
                <option value="kingston">Kingston</option>
                <option value="montegobay">Montego Bay</option>
                <option value="negril">Negril</option>
                <option value="falmouth">Falmouth</option>
                <option value="ochorios">Ocho Rios</option>
                <option value="portmore">Portmore</option>
              </select>
            </div>
          </div> 
          <div className="size-info">
            <div className="adu-kid-acc-wrapper">
              <p className="thirdRow-label">Adults</p>
              <select name="capacity" className="thirdRow">
                <option value="Select">Select One</option>
                {size.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="adu-kid-acc-wrapper">
              <p className="thirdRow-label">Kids</p>
              <select name="capacity" className="thirdRow">
                <option value="Select">Select One</option>
                {size.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="adu-kid-acc-wrapper">
              <p className="thirdRow-label">Need Accessibility?</p>
              <select name="accessible" className="thirdRow">
                <option value="Select">Select One</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <button className="book-button">Book</button>
          <div>
          <Lottie animationData={CarAnimation} className="flex justify-center items-center" loop={true}/>
          </div>
        </div>
      <Footer/>
    </div>
    </>
    );
  }
 