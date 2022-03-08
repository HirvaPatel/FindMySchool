import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark d-flex flex-column">
      <div className="b-example-divider"></div>

      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-white">&copy; 2021 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
