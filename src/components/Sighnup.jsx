import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./sighnup.css";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Sighnup = () => {
  return (
    <div className="wrapper">
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
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't Have An Account?
            <a href="#">Register</a></p>
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
          <button type="submit">Register</button>
          <div className="register-link">
            <p>Don't Have An Account?
            <a href="#">Register</a></p>
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
