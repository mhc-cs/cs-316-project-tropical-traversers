import logo from '../../assets/island_tours.png';
import Image from 'next/image';


export default function Page() {
    return (
    <>
    <div className="footer-container">
        <div className='footer-left'>
            <Image className="logo" src={logo} alt={'company logo'}/> 
            <h5>Contact: Phone: +1 (555) 123-4567</h5>
            <h5>Email: info@islandtours.com</h5>
        </div>
        <div className='footer-middle'>
            <h5>Privacy Policy</h5>
            <h5>Terms of Service </h5>
            <h5>Do not sell or share my personal information</h5>
            <h6><p>&copy;</p>Island Tours. All rights reserved</h6>
        </div>
        <div className='footer-right'>
            <h5>Plan a trip </h5>
            <h5>Explore </h5>
            <h5>Site Map</h5>
        </div>

    </div>
    </>
    );
  }
  