"use client"; //In order to define a use client <--- very important otherwise the page won't load

import React, { useState } from 'react';
import axios from "axios";
import "./login.css";
import router, { useRouter } from "next/navigation";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return(
    <Router>
      <LogIn />
    </Router>
  );
};

const LogIn: React.FC = () => {

  const history=useNavigate();

  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')

  async function submit(event:React.MouseEvent<HTMLButtonElement>){
    event.preventDefault();

    try{
      await axios.post('http://localhost:5000/userAccounts', {
        username,
        password
      })
      .then(res => {
        if(res.data = "exist"){
          //redirect to the home page
          history("/", {state:{id:username}})
        }else if(res.data = "does not exist"){
          //redirect to the home page
          alert("User is not logged in.")
        }
      })
      .catch(err => {
        alert("Incorrect information.")
        console.log(err);
      })
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