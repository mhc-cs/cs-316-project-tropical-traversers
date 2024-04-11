"use client"; //In order to define a use client <--- very important otherwise the page won't load

import React, { useState } from 'react';
import axios from "axios";
import "./driverSignup.css";
import router, { useRouter } from "next/navigation";

const CreateAcc: React.FC = () => {

  //account constants for data
  const [input, setInput] = useState({
    nameF: '',
    nameL:'',
    username: '',
    email: '',
    password: '',
    vehicle: '',
    license: ''
  });
  const [file, setFile] = useState<any | null>({ image1: null, image2: null });
  const [filename, setFilename] = useState({ image1: 'Choose file', image2: 'Choose file' });
  const [previewURL, setPreviewURL] = useState<any | null>({ image1: null, image2: null });

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

    //function to handle the file input 
  function handlePics (event:React.ChangeEvent<HTMLInputElement>, question: string) {
    if (!event.target.files) return;
    try{
        const pic = event.target.files[0];
        setFile({ ...file, [question]: pic });
        // setFilename(pic.name);
        const objectURL = URL.createObjectURL(file);
        // URL.revokeObjectURL(previewURL);
        // setPreviewURL(objectURL);
        
    }
    catch(error){
        console.error('Error creating object URL:', error);
    }
}

  //click event handler
  function handleClick(event:React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const formdata = new FormData();
    const newAcc = {
      nameF: input.nameF,
      nameL: input.nameL,
      username: input.username,
      email: input.email,
      password: input.password,
      vehicle: input.vehicle,
      license: input.license
    }


    axios.post('http://localhost:4000/create', newAcc)
  }
  

console.log('Preview URL:', previewURL);
  const url = "/login/";
  const router = useRouter();
  //input receiver, texts bars, and submit button
  return(
    <>
    <div className ='container'>
        <form>
            <h1>Create Account</h1>
            <input onChange={handleChange} name="nameF" value = {input.nameF} className="form-control" placeholder="First Name"></input>
            <input onChange={handleChange} name="nameL" value = {input.nameL} className="form-control" placeholder="Last Name"></input>
            <input onChange={handleChange} name="username" value = {input.username} className="form-control" placeholder="Username"></input>
            <input onChange={handleChange} name="email" value = {input.email} className="form-control" placeholder="Email"></input>
            <input onChange={handleChange} name="password" value = {input.password}  className="form-control" placeholder="Password" type='password'></input>
            <input onChange={handleChange} name="vehicle" value = {input.vehicle}  className="form-control" placeholder="Vehicle Model"></input>
            <input onChange={handleChange} name="license" value = {input.license}  className="form-control" placeholder="License Number"></input>
            <label htmlFor="image1">State ID:</label>
            <input onChange={(e) => handlePics(e, 'image1')} name="stateID"  className="form-control" type='file'></input>
            {/* {previewURL && (<img src={previewURL} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }}/>)} */}
            <label htmlFor="image2">License:</label>
            <input onChange={(e) => handlePics(e, 'image2')} name="license"  className="form-control" type='file'></input>
            {/* {previewURL && (<img src={previewURL} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }}/>)} */}
            <button onClick={handleClick}className="btn btn-lg btn-info">Create Account</button>
            <span>Already have an account? <button onClick={(event) => { event.preventDefault(); router.push(url); }}><b>Login here</b></button> </span>
        </form>
    </div>
    </>
  );
   
}

export default CreateAcc;
