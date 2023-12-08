import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";

import {
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import '../css/login.css';


const Login = () => {

    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
      };
  
      
  return (
    <div className="formContainer">
     
    <div className="formWrapper">
      <span className="logo"></span>
      <span className="title">Login</span>
      <form >
        <input type="email" placeholder="Email"  />
        <input type="password" placeholder="Password"  />
        <button type="submit">Sign in</button>
          <p>Or</p>
          <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"  />
      </button>
      </form>
    </div>
    <div>
      
    </div>
  </div>

   
  );
};

export default Login;
