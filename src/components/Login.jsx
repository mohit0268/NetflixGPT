import { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidation } from "../../utils/validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [ischecked, setIsChecked] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const buttonClickHandler = () => {
    //validate the form data
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  const checkboxHandler = () => {
    setIsChecked(!ischecked);
  };

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="w-full absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-zinc-950 left-0 right-0 mx-auto mt-40 text-white w-3/12 p-4 mb-4 bg-opacity-90 rounded-lg"
      >
        <div className="flex flex-col px-4">
          <h1 className="text-4xl font-bold my-6 px-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 m-4 bg-gray-800"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-2 m-4 bg-gray-800"
          />

          {ischecked ? (
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="p-2 m-4 bg-gray-800"
            />
          ) : (
            <input type="text" className="p-2 m-4 bg-gray-800" />
          )}

          <input
            type="checkbox"
            onClick={checkboxHandler}
            className="relative left-32"
          />

          <p className="text-red-800 mx-4">{errorMessage}</p>

          <button
            className="p-3 mx-4 my-8 bg-red-900 hover:bg-red-600"
            onClick={buttonClickHandler}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="px-2 m-4">
            <span className="text-gray-500">
              {isSignInForm ? "New to Netflix?" : "Already registered!"}{" "}
            </span>
            <Link className="hover:text-blue-600" onClick={toggleSignInForm}>
              {isSignInForm ? "Sign Up Now" : "Sign In"}
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
