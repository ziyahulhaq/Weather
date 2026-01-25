import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./sighnup.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Sighnup = () => {

    const [action , setAction] =useState ("");

    const registerLink = () =>{
          setAction("active")
    };

        const loginLink = () =>{
          setAction("")

    };


  return (
    <div className={`wrapper ${action}`}>
      <div className="for-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text"
             placeholder="UserName" required />
             <FaUserAlt className="icon"/>

          </div>
          <div className="input-box">
            <input type="Password"
             placeholder="Password" required />
             <FaLock className="icon"/>

          </div>
          <div className="remember-forget">
         <label> <input type="checkbox"></input>Remember Me</label>
         <a href="#">Forget Password?</a>
          </div>
<Link to="/second">
          <button type="submit">Login</button>
</Link>
          <div className="register-link">
            <p>Don't Have An Account?
            <a href="#" onClick={registerLink}>Register</a></p>
          </div>
        </form>
      </div>

        <div className="for-box register">
        <form action="">
          <h1>Register</h1>
          <div className="input-box">
            <input type="text"
             placeholder="UserName" required />
             <FaUserAlt className="icon"/>
          </div>

    <div className="input-box">
            <input type="email"
             placeholder="Email" required />
             <FaEnvelope className="icon"/>

          </div>


          <div className="input-box">
            <input type="Password"
             placeholder="Password" required />
             <FaLock className="icon"/>

          </div>
          <div className="remember-forget">
         <label> <input type="checkbox"></input> I Agree To The Terms & Conditions</label>
          </div>
          <Link to="/second">
          <button type="submit">Register</button>
          </Link>
          <div className="register-link">
            <p>Already Have An Account?
            <a href="#" onClick={loginLink} >Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sighnup;

//    <Link to="/second">
//     <IoIosArrowBack className="To-home"/>
//     </Link>
