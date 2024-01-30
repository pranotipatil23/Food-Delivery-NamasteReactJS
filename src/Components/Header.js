import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import swiggyLogo from "../resources/swiggy.jpeg";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const setBtnName = () => {
    isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
  };

  return (
    <div className="flex items-center justify-center bg-white shadow-lg">
      <div className="logo-container">
        <img className="w-20" src={swiggyLogo} alt="food-logo" />
      </div>
      <div className="">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button className="login" onClick={setBtnName}>
              {isLoggedIn}
            </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
