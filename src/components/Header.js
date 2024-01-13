import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => (
    <a href="/">
      <img className="logo" src={LOGO_URL}  />
    </a>
  );

const Header = () => {
    const [btnNameReact,setBtnNameReact]= useState("Login");
    return (
      <div className="header">
          <Title />
        <div className="nav-items">
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>Cart<i class="fa-solid fa-cart-shopping"></i></li>
            <button className="login-btn" onClick={()=>{
            btnNameReact==="Login"? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;