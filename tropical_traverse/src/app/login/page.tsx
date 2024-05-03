"use client"; //In order to define a use client <--- very important otherwise the page won't load

import React, { useState } from 'react';
import axios from "axios";
import "./login.css";
import router, { useRouter } from "next/navigation";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AccountProvider } from '../context/AuthContext';
import { useContext } from 'react';

//import context of account information
import {useAccount} from '../context/AuthContext';
import ProfilePage from '../driverProfilePage/page';

//const mongoose = require("mongoose")

const App: React.FC = () => {
  return(
    <Router>
      <LogIn />
    </Router>
  );
};

const LogIn: React.FC = () => {

  const history=useNavigate();

  //Create login varaible to store in context
  const {setUserAccount} = useAccount();
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  async function submit(event:React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();

    try{
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password
      })

      if (response.data.success) {
        setUserAccount({username});
        history('/');
      }else{
        alert('Invalid username or password, try again.')
      }
      
    }catch(err){
      console.log(err)
    }
  }
 
  const url = "/signUp/";
  const router = useRouter();
  
  //input receiver, texts bars, and submit button
  return <div className ='login-container'>

      <form>
      <h1>Login</h1>
        <input className='loginform-control' type="email" onChange={(event) => { setUsername(event.target.value) }} placeholder="Username"  />
        <input className='loginform-control' type="password" onChange={(event) => { setPassword(event.target.value) }} placeholder="Password"  />
        <button className='btn btn-lg btn-info' onClick={submit}>Submit</button>
        <span>New to Island Tours? <button onClick={(event) => { event.preventDefault(); router.push(url); }}><b>Create Account</b></button>  </span>
      </form>
  </div>
}
export {LogIn}

export default App;