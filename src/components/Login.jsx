import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";


const Login = () => {
    const [isSignInForm,setisSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        setisSignInForm(!isSignInForm)
    }
  return (
    <>
      <Header />
      <div className="w-full absolute">
        <img
            
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute bg-zinc-950 left-0 right-0 mx-auto mt-40 text-white w-3/12 p-4 mb-4 bg-opacity-90 rounded-lg">
        <div className="flex flex-col px-4">
          <h1 className="text-4xl font-bold my-6 px-6">{isSignInForm ? "Sign In": "Sign Up"}</h1>
          <input type="text" placeholder="Email Address" className="p-2 m-4"/>
          <input type="password" placeholder="Password" className="p-2 m-4"/>
          <button className="p-3 mx-4 my-8 bg-red-900 hover:bg-red-600">{isSignInForm ? "Sign In": "Sign Up"}</button>
          <p className="px-2 m-4"><span className="text-gray-500">New to Netflix? </span><Link className="hover:text-blue-600" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In"}</Link></p>
        </div>
      </form>
    </>
  );
};

export default Login;
