'use client';
import LoginButton from './login_button';
import './navbar.css';
import logo from '../../assets/island_tours.png';
import Image from 'next/image';
import './button.css';
import router, { useRouter } from "next/navigation";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';



export default function NavBar({isLoggedIn}: { isLoggedIn: boolean }){
    const url = "/signUp/";
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const toggleVisibility = () => {
        setOpen(!open);
      };

    function handleProfileClick(e: any){
        toggleVisibility()
    }

    return(
        <>
        <div className='topnav_login'>
            <ul className='login_button'>
                {
                    isLoggedIn ? (
                        <LoginButton/>
                    ) : <div className='account-icon' >
                            <div onClick={handleProfileClick}>
                                <AccountCircleIcon  sx={{ fontSize: 40 }}/>
                            </div>
                            <div className='dropdown' >
                                {
                                    open ? 
                                    (
                                        <ul className='dropdownOptions'>
                                            <li className='option' onClick={(event) => { event.preventDefault(); router.push("/driverProfilePage"); }}>Profile</li>
                                            <li className='option'>Logout</li>
                                        </ul>
                                    ) : null}
                            </div>
                        </div>
                }   
            </ul>
        </div> 
        <div className="topnav_menus">
            <Image className="logo" src={logo} alt={'company logo'} onClick={(event) => { event.preventDefault(); router.push("/"); }}/> 
            <ul>
                <li><a onClick={(event) => { event.preventDefault(); router.push("/"); }}>Home</a></li>
                <li><a onClick={(event) => { event.preventDefault(); router.push("/driversPage/"); }}>Drivers</a></li>
                <li><a onClick={(event) => { event.preventDefault(); router.push("/components/contact"); }}>Contact</a></li>
            </ul>        
        </div>
        </>
    );
  }