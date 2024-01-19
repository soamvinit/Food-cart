import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => (
    <a href="/">
      <img className="w-24" src={LOGO_URL}  />
    </a>
  );

const Header = () => {
    const [btnNameReact,setBtnNameReact]= useState("Login");
    return (
      <div className="flex justify-between bg-orange-300 shadow-lg mb-2 font-bold text-lg">
          <Title />
        <div className="flex items-center ">
          <ul className="flex p-4 m-4 ">
            <li className="px-4">
            <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
            <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
            <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
            <button className="login-btn" onClick={()=>{
            btnNameReact==="Login"? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;