import React from "react";
import ToolLogos from "../assets/ToolLogos.png";
import TextBox from "../assets/TextBox.png";
import ComputerData from "../assets/ComputerData.png";

function Software(props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-roboto font-bold text-[58px]">Software Expertise</h1>
      <img src={ToolLogos} alt="Tool Logos" className="h-[60px] mt-[10px]" />
      <div className="flex self-start flex-row">
        <div className="relative">
          <div className="z-0 mt-[20px] mx-[20px]">
            <svg
              width="665"
              height="270"
              viewBox="0 0 665 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="372"
                height="200"
                rx="12"
                fill="#7153AC"
                fill-opacity="0.4"
              />
              <rect
                x="30"
                y="31"
                width="600"
                height="210"
                rx="12"
                fill="white"
              />
              <foreignObject x="10" y="10" width="700" height="250">
                <div className="font-roboto text-[20px] mx-[120px] mt-[40px] leading-[2.2rem]">
                  Have a specific tool that your company uses? Want help
                  managing data integration with it? We offer complete data
                  management services and can help you and your team become more
                  efficient than ever before.{" "}
                </div>
              </foreignObject>
              <circle cx="68.5" cy="76.5" r="22.5" fill="#8BC280" />
              <circle cx="68.5" cy="150.5" r="22.5" fill="#8BC280" />
            </svg>
          </div>
        </div>
        <img src={ComputerData} alt="Computer Data" className="w-[250px] h-[250px] self-end" />
      </div>
    </div>
  );
}

export default Software;
