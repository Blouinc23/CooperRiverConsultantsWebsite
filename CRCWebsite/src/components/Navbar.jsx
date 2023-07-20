import React from "react";
import LogoNavbar from "../assets/LogoNavbar.png";
import {Link} from 'react-scroll';

function Navbar(props) {
  return (
    <div className="w-full flex justify-between bg-white sticky top-0 z-20">
      <div className="mx-[20px] my-[10px]">
        <Link smooth={true} spy={true} duration={1000} offset={-100} to="home">
        <img
          src={LogoNavbar}
          alt="Logo"
          className="w-[60px] hover:shadow-2xl hover:scale-110 transition-all duration-200 cursor-pointer"
        />
        </Link>
      </div>
      <nav>
        <ul className="flex justify-between mx-[20px]">
          <Link smooth={true} spy={true} duration={1000} offset={-100} to="home" className="font-roboto p-4 text-[18px] underline hover:text-green cursor-pointer transition-colors duration-200">
            Home
          </Link>
          <Link smooth={true} spy={true} duration={1000} offset={-100} to="about" className="font-roboto p-4 text-[18px] underline hover:text-green cursor-pointer transition-colors duration-200">
            About
          </Link>
          <Link smooth={true} spy={true} duration={1000} offset={50} to="contact" className="font-roboto p-4 text-[18px] underline hover:text-green cursor-pointer transition-colors duration-200">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
