// import Image from "next/image";
// import styles from "./page.module.css";

"use client"; //In order to define a use client <--- very important otherwise the page won't load

import React, { useState } from 'react';
import axios from "axios";

function createAcc() {
  
  //account constants for data
  const [input, setInput] = useState({
    nameF: '',
    username: '',
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
    // console.log(input)
    const newAcc = {
      nameF: input.nameF,
      username: input.username,
      email: input.email,
      password: input.password
    }

    axios.post('http://localhost:4000/create', newAcc)
  }

  //input receiver, texts bars, and submit button
  return <div className ='container'>
    <h1>Add Username</h1>
    <form>
    <div className='form-group'>
        <input onChange={handleChange} name="nameF" value = {input.nameF} className="form-control" placeholder="name"></input>
      </div>

      <div className='form-group'>
        <input onChange={handleChange} name="username" value = {input.username} className="form-control" placeholder="username"></input>
      </div>

      <div className='form-group'>
        <input onChange={handleChange} name="email" value = {input.email} className="form-control" placeholder="email"></input>
      </div>

      <div className='form-group'>
        <input onChange={handleChange} name="password" value = {input.password}  className="form-control" placeholder="password"></input>
      </div>

      <button onClick ={handleClick}className="btn btn-lg btn-info">make account</button>
    </form>
  </div>
}

export default createAcc;