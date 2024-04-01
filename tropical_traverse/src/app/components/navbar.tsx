import LoginButton from './login_button';
import './navbar.css';
import logo from '../assets/island_tours.png';
import Image from 'next/image';
import './button.css'


export default function NavBar(){
    return(
        <>
        <div className='topnav_login'>
            <ul className='login_button'>
                <LoginButton/>
            </ul>
        </div>
        
        <div className="topnav_menus">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">Tours</a></li>
                <li><a href="#news">Accomodation</a></li>
            </ul> 
            <Image className="logo" src={logo} alt={'company logo'}/> 
            <ul>
                <li><a href="#contact">Drivers</a></li>
                <li><a href="#about">Contact</a></li>
            </ul>        
        </div>
            </>
    );
  }