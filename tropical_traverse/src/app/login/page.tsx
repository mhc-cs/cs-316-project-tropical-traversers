"use client"; //In order to define a use client <--- very important otherwise the page won't load

import React, { useState } from 'react';
import axios from "axios";
import "./login.css";

const CreateAcc: React.FC = () => {

  
  //account constants for data
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  //input type event handler
  function handleChange(event:React.ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
  
    setInput(prevInput => {
      return{
        ...prevInput,
        [name]: value
      }
    })
  }

  //click event handler
  function handleClick(event:React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const newAcc = {
      email: input.email,
      password: input.password
    }

    axios.post('http://localhost:4000/create', newAcc)
  }

  //input receiver, texts bars, and submit button
  return <div className ='container'>

      <form>
      <h1>Create Account</h1>
        <input onChange={handleChange} name="email" value = {input.email} className="form-control" placeholder="Email"></input>
        <input onChange={handleChange} name="password" value = {input.password}  className="form-control" placeholder="Password"></input>
        <button onClick ={handleClick}className="btn btn-lg btn-info">Login</button>
        <span>New to Island Tours? <b>Create account</b> </span>
      </form>
  </div>
}

export default CreateAcc;