import React from "react";
import Datalines from "../assets/Datalines.png";
import Lottie from "lottie-react";
import CustomerExperienceAnim from "../assets/jsonAnimations/CustomerExperienceAnim.json";
import DataAnalyticsAnim from "../assets/jsonAnimations/DataAnalyticsAnim.json";
import eCommerceAnim from "../assets/jsonAnimations/eCommerceAnim.json";

function Services(props) {
  return (
    <>
      <div className="flex flex-col relative">
        <div className="flex gap-[40px] mt-[100px] justify-center items-center z-10 mr-[100px]" id="eCommerce">
          <div>
            <Lottie animationData={eCommerceAnim} id="eCommereceAnimation" style={{width:'25vw', marginRight:'100px'}}/>
          </div>
          <div>
            <h1 className="font-roboto font-bold text-[48px] mb-[20px]">
              eCommerce Management
            </h1>
            <svg
              width="1155"
              height="328"
              viewBox="0 0 1155 328"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="29.5145"
                y="27"
                width="1125.49"
                height="301"
                rx="14"
                fill="#7153AC"
                fill-opacity="0.4"
              />

              <ellipse
                cx="1124.99"
                cy="59.5"
                rx="23.1197"
                ry="22.5"
                fill="#8BC280"
              />
              <ellipse
                cx="1124.99"
                cy="128.5"
                rx="23.1197"
                ry="22.5"
                fill="#8BC280"
              />
              <ellipse
                cx="1124.99"
                cy="197.5"
                rx="23.1197"
                ry="22.5"
                fill="#8BC280"
              />
              <rect width="1125.49" height="301" rx="14" fill="white" />
              <foreignObject x="10" y="10" width="1125" height="250">
                <div className="font-roboto text-[30px] mx-[30px] mt-[10px] leading-[5rem]">
                  We offer special expertise in managing and improving your
                  ability to market and sell your products. Creating custom
                  tools and solutions for any problem you may have or any
                  service you’d like to provide.
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>

        <div className="flex gap-[40px] mt-[100px] justify-center items-center z-10 mr-[100px]" id='DataAnalysis'>
        <div>
            <Lottie animationData={DataAnalyticsAnim} id="DataAnalyticsAnimation" style={{width:'25vw', marginRight:'100px'}}/>
          </div>
          <div>
            <h1 className="font-roboto font-bold text-[48px] mb-[20px]">
              Data Analysis and Information Security
            </h1>
            <svg
              width="1155"
              height="328"
              viewBox="0 0 1155 328"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="29.5145"
                y="27"
                width="1125.49"
                height="301"
                rx="14"
                fill="#7153AC"
                fill-opacity="0.4"
              />

              <ellipse
                cx="1124.99"
                cy="59.5"
                rx="23.1197"
                ry="22.5"
                fill="#8BC280"
              />
              <ellipse
                cx="1124.99"
                cy="128.5"
                rx="23.1197"
                ry="22.5"
                fill="#8BC280"
              />
              <ellipse
                cx="1124.99"
                cy="197.5"
                rx="23.1197"
                ry="22.5"
                fill="#8BC280"
              />
              <rect width="1125.49" height="301" rx="14" fill="white" />
              <foreignObject x="10" y="10" width="1125" height="250">
                <div className="font-roboto text-[30px] mx-[30px] mt-[10px] leading-[5rem]">
                  We offer special expertise in managing and improving your
                  ability to market and sell your products. Creating custom
                  tools and solutions for any problem you may have or any
                  service you’d like to provide.
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>

        <div className="flex gap-[40px] mt-[100px] justify-center items-center z-10 mr-[100px]" id='CustomerExperience'>
        <div>
            <Lottie animationData={CustomerExperienceAnim} id='CustomerExperienceAnimation' style={{width:'25vw', marginRight:'100px'}}/>
          </div>
          <div>
            <h1 className="font-roboto font-bold text-[48px] mb-[20px]">
              Customer Experience Improvement
            </h1>
            <svg
              width="1155"
              height="328"
              viewBox="0 0 1155 328"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="29.5145"
                y="27"
                width="1125.49"
                height="301"
                rx="14"
                fill="#7153AC"
                fill-opacity="0.4"
              />

              <ellipse
                cx="1124.99"
                cy="59.5"
                rx="23.1197"
                ry="22.5"
                fill="#8BC280"
              />
              <ellipse
                cx="1124.99"
                cy="128.5"
                rx="23.1197"
                ry="22.5"
                fill="#8BC280"
              />
              <ellipse
                cx="1124.99"
                cy="197.5"
                rx="23.1197"
                ry="22.5"
                fill="#8BC280"
              />
              <rect width="1125.49" height="301" rx="14" fill="white" />
              <foreignObject x="10" y="10" width="1125" height="250">
                <div className="font-roboto text-[30px] mx-[30px] mt-[10px] leading-[5rem]">
                  We offer special expertise in managing and improving your
                  ability to market and sell your products. Creating custom
                  tools and solutions for any problem you may have or any
                  service you’d like to provide.
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
        <div className="bg-liteblue absolute w-[100%] flex justify-center mt-[240px] pl-[50vw]">
          <img
            src={Datalines}
            alt="Data Lines"
            className="h-[1420px] right-[14rem] z-0  opacity-40"
          />
        </div>
      </div>
    </>
  );
}

export default Services;
