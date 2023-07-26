import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Home from "../assets/main.svg";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(min-width: 320px) and (max-width: 600px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]"> Omkar Kalepu</span>
            </h1>
            <p className={`${styles.heroSubText} mt-1 text-white-100`}>
              An undergraduate engineering student with a fervent{" "}
              <br className="sm:block hidden" /> love for web development,
              creating wonders through lines of code.
            </p>
          </div>
        </div>

        {!isMobile && <ComputersCanvas />}
      </section>

      {isMobile && (
        <div className="z-99 mt-[-500px]">
          <img
            src={Home}
            alt="Mobile Home"
            className="max-w-3xl max-h-60 m-auto"
          />
        </div>
      )}
    </>
  );
};

export default Hero;
