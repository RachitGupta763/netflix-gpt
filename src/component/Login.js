import { useRef, useState } from "react";
import { BG_URL } from "../utils/Links";
import { checkValidation } from "../utils/validation";



const Login = () =>{
    const[signInNow,setSignInNow]=useState(true);
    const [msg,setMsg]=useState();
    const email = useRef(null);
    const password = useRef(null);

    const validation = () =>{
        const errormessage = checkValidation(email.current.value,password.current.value);
        setMsg(errormessage);
        console.log(email.current.value,password.current.value);

    }
    const toggleButton = () =>{
        setSignInNow(!signInNow);
    } 
    return (
        <div className="">
            <div className="absolute">
            <img className="h-screen w-screen object-cover " src={BG_URL} alt="logo"></img>
            </div>
            <form onSubmit = {(e)=>{
               //return e.preventDefault();
               e.preventDefault();
            }}  className="w-1/4 p-6 mx-auto right-0 left-0 my-36 absolute text-white bg-black opacity-90">
               <p className="my-4 py-2 mx-1 text-3xl">{signInNow ? "Sign In":"Sign Up" }</p>
               {!signInNow &&
               <input className="p-2 m-3 mx-auto w-full bg-gray-800 text-white" type="name" placeholder="Enter your Name"></input>
               }
               <input ref={email} className="p-2 m-3 mx-auto w-full bg-gray-800 text-white" type="email" placeholder="Enter your Email"></input>
               
               <input ref={password} className="p-2 m-3 mx-auto w-full bg-gray-800 text-white" type="password" placeholder="Enter your Password"></input>
               <p className="text-red-500 p-1">{msg}</p>
               <button className="p-2 m-3 mx-auto w-full bg-red-700 " onClick={validation}>{signInNow ? "Sign In":"Sign Up" }</button>
               <div className="p-2 m-4 mx-auto" >
               <p>{signInNow ? "New User?":"Already a User?"}<span className="cursor-pointer font-semibold hover:font-bold" onClick={toggleButton}> {signInNow ? "Sign Up Now":"Sign In Now" } </span></p>
               </div>
            </form>
        </div>
     )
}

export default Login;