import React,{useEffect,useRef} from "react";
import logo from "../img/chat.jpg";

import Footer from "./footer";

import '../css/App.css';


const Welcome = () => {
    const scrollRef = useRef();
    useEffect(() => {
        // Scroll to the element when the component mounts
        if (scrollRef.current) {
          scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, []);
  return (
   
    <main className="welcome" ref={scrollRef}>
         <br></br>
      <h2>Welcome to ChitChatPal</h2>
      <img src={logo} alt="logo" className="chaticon" />
      <h1>An online chat app for communicating with friends, colleagues, and family</h1>
      <br />
      
      <p>
        ChitChat is a platform designed to bring people together. With a focus on
        simplicity and real-time communication, ChitChat makes it easy for you
        to connect with friends, family, and colleagues from anywhere in the world.
      </p>
      <p>
        Whether you're looking for casual conversations or collaborative
        discussions, ChitChat provides a secure and enjoyable environment for
        fostering meaningful connections.
      </p>
      <p>
        Join us on ChitChat and explore the world of instant communication.
        Sign up and start chatting today!
        </p>
    
    <Footer />
    
    </main>
  );
};

export default Welcome;
