import React from "react";
import LogoNavbar from "../assets/LogoNavbar.png";

function Navbar(props) {
  return (
    <div className="w-full flex justify-between bg-white sticky top-0">
      <div className="mx-[20px] my-[10px]">
        <img src={LogoNavbar} alt="Logo" className="w-[60px] hover:shadow-2xl" />
      </div>
      <nav>
        <ul className="flex justify-between mx-[20px]">
          <li className="font-roboto p-4 text-[18px] underline hover:text-green cursor-pointer transition-colors duration-200">Home</li>
          <li className="font-roboto p-4 text-[18px] underline hover:text-green cursor-pointer transition-colors duration-200">About</li>
          <li className="font-roboto p-4 text-[18px] underline hover:text-green cursor-pointer transition-colors duration-200">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
