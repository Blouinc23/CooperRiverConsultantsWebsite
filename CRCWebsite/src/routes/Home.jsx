import React from "react";
import HeroSection from "../components/HeroSection";
import Software from "../components/Software";
import CustomTools from "../components/CustomTools";

function Home(props) {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div className="flex gap-[50px] w-full justify-center">
            <Software />
            <CustomTools />
      </div>
      <footer><h1>test</h1></footer>
    </>
  );
}

export default Home;
