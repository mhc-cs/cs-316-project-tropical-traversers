'use client';

import NavBar from "../navBar/navbar";
import Footer from "../footer/footer";
import contactPerson from "../../assets/contactPerson.jpg";
import Image from 'next/image';
import "./contact.css";
import { FormEvent, useState } from "react";
import error from "next/error";


export default function Page() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    try{
      const res = await fetch('/api',
        {
          method: 'POST',
          body: JSON.stringify({firstName, lastName, email, message}),
          headers: {
            'content-type': 'application/json',
          }
        }
      )
    }
    catch{
      console.error("Error", error)
    }
  }


    return (
      <>
      <NavBar/>
      <div className="contact-container">
        <div className="top-contact">
          <p className="contact-text">Get in touch <br /> with us</p>
          <div className="contact-image"> 
            <Image className='contact-person-image' priority={true} src={contactPerson} alt={"contact person"}/>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit} action="" className="form-form">
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} className="form-class" type="text" placeholder="First name"/>
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} className="form-class" type="text" placeholder="Last name"/>
            <input onChange={(e) => setEmail(e.target.value)} value={email} className="form-class" type="email" placeholder="Email"/>
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="form-class" name="Message" placeholder="Message"></textarea>
            <button className="submit-contact" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
 