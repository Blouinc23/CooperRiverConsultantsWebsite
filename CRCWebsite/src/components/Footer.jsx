import React from "react";
import PhonePng from "../assets/PhonePng.png";

function Footer(props) {
  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    console.log(payload);
  }

  return (
    <div className="flex gap-[50px] my-[100px] justify-center items-center">
      <div
        id="emailForm"
        className="flex flex-col justify-center items-center w-[35vw] relative rounded-2xl"
      >
        <h1 className="text-center z-10 font-roboto">Email Us</h1>
        <form
          className="flex flex-col justify-center items-center mt-[10px] text-[20px] w-[80%] z-10 font-roboto"
          onSubmit={submitHandler}
        >
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="rounded-xl px-2 mr-[10px] flex-1"
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              className="rounded-xl px-2 flex-1"
            />
          </div>

          <input
            type="text"
            placeholder="Email"
            name="email"
            className="w-full my-[20px] rounded-xl px-2"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="w-full mb-[20px] rounded-xl px-2 h-[15vh]"
          />
          <button className="bg-liteblue px-6 py-2 rounded-2xl">Submit</button>
        </form>
        <div className="absolute z-0 w-full overflow-hidden rounded-2xl">
          <svg
            width="849"
            height="399"
            viewBox="0 0 849 399"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="849" height="399" rx="14" fill="#B9ADD1" />
          </svg>
        </div>
      </div>
      <div className="relative">
        <h1 className="font-roboto text-[48px] mb-[20px] absolute top-[-40px]">Give us a Call!</h1>
        <div className="">
          <svg
            width="695"
            height="162"
            viewBox="0 0 695 162"
            fill="none"
          >
            <rect
              width="695"
              height="162"
              rx="12"
              fill="#7153AC"
              fill-opacity="0.4"
            />
            <rect
              x="30"
              y="34.1631"
              width="635"
              height="99.1837"
              rx="12"
              fill="white"
            />
            <ellipse
              cx="68.5"
              cy="84.3061"
              rx="29.5"
              ry="32.5102"
              fill="#8BC280"
            />
            <foreignObject x="90" y="35" width="1125" height="250">
                <div className="font-roboto text-[48px] mx-[30px] mt-[10px] leading-[5rem]">
                843-364-9175
                </div>
              </foreignObject>
              <foreignObject x="15" y="55" width="1125" height="250">
                <div className="font-roboto text-[48px] mx-[20px] leading-[5rem] group w-fit">
                    <img src={PhonePng} className="w-[3vw] h-[3vw] translate-x-0 group-hover:translate-x-[-10px] group-hover:translate-y-[5px] group-hover:rotate-[18deg] transition-all duration-300"/>
                </div>
                </foreignObject>
            <rect x="51" y="62" width="58" height="58" fill="url(#pattern0)" />
          </svg>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
