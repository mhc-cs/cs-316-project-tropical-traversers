"use client" ;
import router, { useRouter } from "next/navigation";
import "./roles.css";

export default function Roles(){

  function handlePics (event:React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target);
}

  const urlsignup = "/signUp/";
  const urldriver = "/driverSignup/";
  const router = useRouter();
    return (
    <>
    <div className="optionContainer">
      <h3 className="role_Iam">I am a </h3>
      <div className="optionButtons">
        <button className="driverButton" onClick={() => router.push(urldriver)}>
          <img src="https://img.icons8.com/emoji/96/oncoming-automobile.png" alt="driver" /><br />
          <h4>Driver</h4> 
        </button>

        <button className="userButton" onClick={() => router.push(urlsignup)}>
          <img src="https://img.icons8.com/officel/80/suitcase.png" alt="tourist" /><br />
          <h4>Tourist</h4> 
        </button>
      </div>
    </div>
    </>
    );
  }

