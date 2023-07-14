import React from "react";
import HeroImage from "../assets/HeroImage.png";
import TextLogo from "../assets/TextLogo.png";
import BusinessIcons from "../assets/BusinessIcons.png";

function HeroSection(props) {
  return (
    <div className="w-full flex justify-center gap-[100px] my-[100px]">
      <div className="flex flex-col justify-center">
        <img src={TextLogo} alt="Text Logo" className="w-[1200px]" />
        <h1 className="font-roboto font-bold text-[34px]">Product and Data Management Tailored to Your Needs</h1>
        <img src={BusinessIcons} alt="Business Icons" className="w-[550px] mt-[25px]" />
      </div>
      <img src={HeroImage} alt="Hero" className="w-[500px]" />  
    </div>
  );
}

export default HeroSection;
