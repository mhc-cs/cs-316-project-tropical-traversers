import logo from '../../assets/island_tours.png';
import Image from 'next/image';
import './footer.css';



export default function Page() {
    return (
    <>
    <div className="footer-container">
        <div className='footer-left'>
            <Image className="logo-bottom" src={logo} alt={'company logo'}/> 
            <p>Contact: Phone: +1 (555) 123-4567</p>
            <p>Email: info@islandtours.com</p>
        </div>
        <div className='footer-middle'>
            <p>Privacy Policy</p>
            <p>Terms of Service </p>
            <p>Do not sell or share my personal information</p>
            <h6><p className='copyright'>&copy;</p>Island Tours. All rights reserved</h6>
        </div>
        <div className='footer-right'>
            <p>Plan a trip</p>
            <p>Explore </p>
            <p>Site Map</p>
        </div>

    </div>
    </>
    );
  } 
  