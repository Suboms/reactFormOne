/* eslint-disable react/jsx-key */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
const Navbar = ({ navItem }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <>
      <div className="navbar responsive-navbar">
        <div className="nav-links">
          <ul className="nav-list">
            {navItem.map((link, index) => (
              <Link to={link.link} key={index}>
                <li  className="nav-item">
                  {link.linkText}
                </li>
              </Link>
            ))}
          </ul>
          <div className="auth-button">
            {loggedIn ? (
              <Link to="/">
                <button onClick={handleLogin} className="auth-button">
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button onClick={handleLogin} className="auth-button">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  navItem: PropTypes.array.isRequired,
};
export default Navbar;
