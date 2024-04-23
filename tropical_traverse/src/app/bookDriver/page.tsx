'use client';

import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import "./bookDriver.css";

// {driverName}:{driverNanme:string}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Page() {

  const size = Array.from({ length: 100 }, (_, index) => index + 1);
  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
    <NavBar isLoggedIn={false}/>
      <div className="filter-wrapper">
        <div className="date">
          <p className="filter-option-label">From</p>
          <DatePicker onChange={onChange} value={value} />
        </div>
        <div className="date">
          <p className="filter-option-label">To</p>
          <DatePicker onChange={onChange} value={value} />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Nam nam"/>
        </div>
        <div>
          <label htmlFor="">Phone Number</label>
          <input type="text" placeholder="+1(700)2455689"/>
        </div>
        <div className="option-wrapper ll">
          <p className="filter-option-label">Location</p>
          <select name="selectedLocation" className="options-options locations">
            <option value="kingston">Kingston</option>
            <option value="montegobay">Montego Bay</option>
            <option value="negril">Negril</option>
            <option value="falmouth">Falmouth</option>
            <option value="ochorios">Ocho Rios</option>
            <option value="portmore">Portmore</option>
          </select>
        </div>
        <div className="option-wrapper cl">
          <p className="filter-option-label">Adults</p>
          <select name="capacity" className="options-options capacity">
            <option value="Select">Select One</option>
            {size.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        <div className="option-wrapper cl">
          <p className="filter-option-label">Kids</p>
          <select name="capacity" className="options-options capacity">
            <option value="Select">Select One</option>
            {size.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        <div className="option-wrapper al">
          <p className="filter-option-label">Need Accessibility?</p>
          <select name="accessible" className="options-options accessible">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button className="search-button">Book</button>
      </div>
    <Footer/>
    </>
    );
  }
 