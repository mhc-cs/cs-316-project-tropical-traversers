import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navBar/navbar";
import Carousel from "./components/carousel/carousel";
import tropics1 from "./assets/home_carousel/jamaica1.jpg";
import tropics2 from "./assets/home_carousel/jamaica2.jpg";
import tropics3 from "./assets/home_carousel/jamaica3.jpg";
import tropics4 from "./assets/home_carousel/jamaica4.jpg";
import tropics5 from "./assets/home_carousel/jamaica5.jpg";
import tropics6 from "./assets/home_carousel/jamaica6.jpg";
import tropics7 from "./assets/home_carousel/jamaica7.jpg";
import tropics8 from "./assets/home_carousel/jamaica8.jpg";
import tropics9 from "./assets/home_carousel/jamaica9.jpg";
import tropics10 from "./assets/home_carousel/jamaica10.jpg";
import TopThings from "./components/infoList/infoList";
import Footer from "./components/footer/footer";
import FAQs from "./components/faq/faq";
import Reviews from "./components/reviews/reviews";
import { Fraunces } from 'next/font/google';

// images for the carousel
const IMAGES = [tropics1, tropics2, tropics3, tropics4, tropics5, tropics6, tropics7, tropics8, tropics9, tropics10];
const fraunces = Fraunces({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
    {/* <main className="latin.main"> */}
    <NavBar isLoggedIn={true}/>
     <Carousel imageURLs = {IMAGES}/>
     <TopThings/>
     <Reviews/>
     <FAQs/>
     <Footer/>
    {/* </main> */}
    </>
  );
}
