import React from "react";
import HeroSection from "../components/HeroSection";
import Software from "../components/Software";
import CustomTools from "../components/CustomTools";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home(props) {
  return (
    <>
      <div>
        <section id="home">
          <HeroSection />
        </section>
      </div>
      <section id="about">
        <div className="flex gap-[50px] w-full justify-center items-center">
          <Software />
          <CustomTools />
        </div>
        <Services />
      </section>
      <footer>
        <section id="contact">
          <Footer></Footer>
        </section>
      </footer>
    </>
  );
}

export default Home;
