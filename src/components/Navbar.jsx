import React, { useState, useEffect } from "react";
import {useNavigate, NavLink }from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  const cartState = useSelector((state) => state.handleCart);

  useEffect(() => {
    // Retrieve user info from localStorage when the Navbar component mounts
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser); // Update state with user data
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Remove user data from localStorage
    setUser(null); // Clear user state
    navigate("/"); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
      <button className="navbar-toggler mx-2" type="button">
           <span className="navbar-toggler-icon"></span>
       </button>

     <div className="collapse navbar-collapse">
       <ul className="navbar-nav m-auto my-2 text-center">
        <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/product">Products</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact us</NavLink>
        </li>
        </ul>
        <div className="buttons text-center">
        {user ? (
          <>
            <span className="mx-2 fw-bold">Hello, {user.name}</span>
                <NavLink to="/cart" className="btn btn-outline-dark m-2">
                   <i className="fa fa-cart-shopping mr-1"></i> Cart ({cartState.length})
                 </NavLink>
                 <button className="btn btn-outline-dark m-2" onClick={handleLogout}>Logout</button>
                 
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-outline-dark m-2">Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-dark m-2">Register</NavLink>
          </>
        )}
      </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
