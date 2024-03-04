import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navbar";
import Carousel from "./components/carousel";
import tropics1 from "./assets/jamaica1.jpg";
import tropics2 from "./assets/jamaica2.jpg";
import tropics3 from "./assets/jamaica3.jpg";
import tropics4 from "./assets/jamaica4.jpg";
import tropics5 from "./assets/jamaica5.jpg";
import tropics6 from "./assets/jamaica6.jpg";
import tropics7 from "./assets/jamaica7.jpg";
import tropics8 from "./assets/jamaica8.jpg";
import tropics9 from "./assets/jamaica9.jpg";
import tropics10 from "./assets/jamaica10.jpg";


export default function Page() {
  return (
    <>
     <NavBar/>
     <Carousel/>
    </>
  );
  
}
