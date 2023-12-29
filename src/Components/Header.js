import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  const setBtnName = () => {
    isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="food-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={setBtnName}>
            {isLoggedIn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
