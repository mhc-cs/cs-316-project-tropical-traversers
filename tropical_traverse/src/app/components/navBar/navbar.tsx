'use client';
import LoginButton from './login_button';
import './navbar.css';
import logo from '../../assets/island_tours.png';
import Image from 'next/image';
import './button.css';
import router, { useRouter } from "next/navigation";


export default function NavBar(){
    const url = "/signUp/";
    const router = useRouter();

    return(
        <>
        <div className='topnav_login'>
            <ul className='login_button'>
                <LoginButton/>
            </ul>
        </div> 
        <div className="topnav_menus">
            <Image className="logo" src={logo} alt={'company logo'} onClick={(event) => { event.preventDefault(); router.push("/"); }}/> 
            <ul>
                <li><a onClick={(event) => { event.preventDefault(); router.push("/"); }}>Home</a></li>
                <li><a onClick={(event) => { event.preventDefault(); router.push("/driversPage/"); }}>Drivers</a></li>
                <li><a onClick={(event) => { event.preventDefault(); router.push("/contact"); }}>Contact</a></li>
            </ul>        
        </div>
        </>
    );
  }