import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark d-flex flex-column">
      <div className="b-example-divider"></div>

      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
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
          <p className="text-center text-white">
            &copy; 2022 FindMySchool, Inc
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
