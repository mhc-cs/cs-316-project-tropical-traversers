"use client" ;
import router, { useRouter } from "next/navigation";

export default function LoginButton(){
  const url = "/roles/";
  const router = useRouter();
    return (
      <button className="button login" onClick={() => router.push(url)}>
        Login / SignUp
      </button>
    );
  }

