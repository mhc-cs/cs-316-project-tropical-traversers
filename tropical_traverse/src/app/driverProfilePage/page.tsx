
import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";
import profile from "../assets/profiles/profile1.jpg";
import bg from "../assets/profiles/bg_profile.jpg";
import Image from 'next/image';
import "./profilePage.css";
import Rating from '@mui/material/Rating';



const profileInfo = [
    { 
        firstName: "Kayla", 
        lastName: "Green", 
        locality:"Kingston",
        car: "Toyota", 
        trips: 150, 
        experience: 5, 
        username: "kaykay",
        email: "kaykay@mail.com", 
        lisenceNo: "11111"
     }];

export default function Page() {
  return (
    <>
    <div className="profilePage-wrapper">
        <NavBar isLoggedIn={true}/>
        <Image src={bg} alt="profile background" className="bg" />
        <Image src={profile} alt="profile picture" className="profile_pic" />
        <div>
            {profileInfo.map((info, index) => (
                    <div key={index} className='profle-wrapper'>
                        <div className="under-image">
                            <p className="full-name">{info.firstName} {info.lastName}</p>
                            <p className="locality">{info.locality}</p>
                            <p className="rating-driverr"><Rating name="read-only" value={5} readOnly size="large"/></p>
                            <div className="lower-bar-wrapper">
                                <div className="trips-profile">
                                    <p>{info.trips}</p>
                                    <span className="label">Trips</span>
                                </div>
                                <div className="experience-profile">
                                    <p className="expereicne-years">{info.experience}</p>
                                    <span className="label">Experience (Yrs)</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-wrapper-wrapper">
                            <div className="username-wrapper wp left">
                                <p>Username</p>
                                <p className="in">{info.username}</p>
                            </div>
                            <div className="email-wrapperd wp right">
                                <p>Email address</p>
                                <p className="in">{info.email}</p>
                            </div>
                        </div>
                        <div className="form-wrapper-wrapper wp left">
                            <div className="firstname-wrapper">
                                <p>First name</p>
                                <p className="in">{info.firstName}</p>
                            </div>
                            <div className="lastname-wrapper wp right">
                                <p>Last name</p>
                                <p className="in">{info.lastName}</p>
                            </div>
                        </div>
                        <div className="form-wrapper-wrapper wp left">
                            <div className="vehicle-wrapper">
                                <p>Vehicle Model</p>
                                <p className="in">{info.car}</p>
                            </div>
                            <div className="lisence-wrapper wp right">
                                <p>Lisence Number</p>
                                <p className="in">{info.lisenceNo}</p>
                            </div>
                        </div>
                        <div className="aboutme-wrapper">
                            <label htmlFor="">About Me</label>
                            <textarea className="about-me" name="about-me" id=""></textarea>
                        </div>
                    </div>
                ))}
        </div>
        <Footer/>
    </div>
    </>
  );
}
