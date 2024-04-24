"use client"; //In order to define a use client <--- very important otherwise the page won't load

import React, { useState } from 'react';
import axios from "axios";
import "./signUp.css";
import router, { useRouter } from "next/navigation";

const CreateAcc: React.FC = () => {

  
  //account constants for data
  const [input, setInput] = useState({
    nameF: '',
    nameL:'',
    username: '',
    email: '',
    password: '',
    type: ''
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
  function handleClick(event?:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const newAcc = {
      nameF: input.nameF,
      nameL: input.nameL,
      username: input.username,
      email: input.email,
      password: input.password,
      type: 'user'
    }

    axios.post('http://localhost:5000/userAccounts', newAcc)
    .then(() => {
      // Clear input fields after successful submission
      setInput({
        nameF: '',
        nameL:'',
        username: '',
        email: '',
        password: '',
        type: ''
      });
    })
  }

  //Checks for empty fields in create-account
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const inputs = form.querySelectorAll<HTMLInputElement>('input[required]');
    let isValid = true;
    inputs.forEach((input: HTMLInputElement) => {
      if (!input.value){
        isValid = false;
        input.reportValidity();
      }
    });
    if(isValid) {
      // form.submit();
      handleClick();
    }else {
      alert('Information Incomplete - Please try again.')
    }
  }

  const url = "/login/";
  const router = useRouter();
  //input receiver, texts bars, and submit button
  return <div className ='container'>

      <form onSubmit={handleFormSubmit}>
      <h1>Create Account</h1>
        <input onChange={handleChange} name="nameF" value = {input.nameF} className="form-control" placeholder="First Name" required></input>
        <input onChange={handleChange} name="nameL" value = {input.nameL} className="form-control" placeholder="Last Name" required></input>
        <input onChange={handleChange} name="username" value = {input.username} className="form-control" placeholder="Username" required></input>
        <input onChange={handleChange} name="email" value = {input.email} className="form-control" placeholder="Email" required></input>
        <input onChange={handleChange} name="password" value = {input.password}  className="form-control" placeholder="Password" type='password' required></input>
        <button className="btn btn-lg btn-info">Create Account</button>
        <span>Already have an account? <button onClick={(event) => { event.preventDefault(); router.push(url); }}><b>Login here</b></button> </span>
      </form>
  </div>
}

export default CreateAcc;