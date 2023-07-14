import React from "react";
import LanguageLogos from "../assets/LanguageLogos.png";
import CodeSnippet from "../assets/CodeSnippet.png";

function CustomTools(props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-roboto font-bold text-[58px]">Software Expertise</h1>
      <img
        src={LanguageLogos}
        alt="Language Logos"
        className="h-[60px] mt-[10px]"
      />
      <div className="flex self-start flex-row">
        <div className="relative">
          <div className="z-0 mt-[20px] mx-[20px]">
            <svg
              width="618"
              height="228"
              viewBox="0 0 618 228"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="55"
                y="27"
                width="563"
                height="201"
                rx="12"
                fill="#D9D9D9"
              />
              <circle cx="506.5" cy="122.5" r="95.5" fill="#87B0C5" />
              <rect width="571" height="201" rx="12" fill="white" />
              <foreignObject x="10" y="10" width="600" height="250">
                <div className="font-roboto text-[20px] mx-[60px] mt-[10px] leading-[2.2rem]">
                If other third party tools aren’t working out, or you’re looking for something tailored to your needs, we have a specialized team that can create the perfect tool that your business needs to succeed. 
                </div>
              </foreignObject>
              <ellipse cx="31.5" cy="31.5" rx="23.5" ry="22.5" fill="#8BC280" />
            </svg>
          </div>
        </div>
        <img
          src={CodeSnippet}
          alt="Code Snippet"
          className="w-[250px] h-[250px] self-end"
        />
      </div>
    </div>
  );
}

export default CustomTools;
