import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <header className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use href="#bootstrap" />
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/universities" className="nav-link px-2 text-white">
                  Universities
                </a>
              </li>
              <li>
                <a href="/advising" className="nav-link px-2 text-white">
                  Advising
                </a>
              </li>
            </ul>

            <div className="text-end">
              <Link to="/Login">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
              </Link>
              <Link to="/SignUp">
                <button type="button" className="btn btn-success">
                  Sign-up
                </button>
              </Link>
            </div>
          </div>
        </header>
      </header>
    </div>
  );
};

export default Header;
