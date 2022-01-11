import { useState, useEffect, useContext, useRef } from "react";
import Head from "next/head";

// components
import Intro from "../components/homepage/Intro";
import Websites from "../components/homepage/Websites";
import AboutMe from "../components/homepage/AboutMe";
import GetInTouch from "../components/homepage/GetInTouch";

// context
import _appContext from "../context/_appContext";

// styles
import styles from "../styles/Home.module.scss";

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default function Home() {

  const { darkMode, mobile } = useContext(_appContext);
  const [height, setHeight] = useState(0);
  const backgroundRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    // mobile background fix
    const adjustHeight = () => {
      backgroundRef.current.setAttribute("style", `height: ${window.screen.height}px !important;`);
    };
    if (mobile) {
      screen.orientation.addEventListener('change', adjustHeight)
      adjustHeight();
    }
    // control height of content secion
    const handleResize = () => {
      setHeight(contentRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mobile) screen.orientation.removeEventListener('change', adjustHeight)
    };
  }, [mobile]);

  return (
    <>
      <Head>
        <title>Home | Matthew Sweeney</title>
      </Head>
      <style global="true">{`
        #landing-page *::selection {
          background: ${darkMode ? "#bf7cb9" : "#fcba03"};
          color: ${darkMode ? "#fff" : "#000"};
        }
      `}</style>
      <div 
        className="relative animate-fade-in"
        id="landing-page"
      >
        <Intro />
        <div className="relative" style={{height}}>
          <div 
            ref={backgroundRef}
            className="sticky -top-28 h-screen w-full"
          >
            <div className="relative h-full w-full">
              <div className={`${darkMode ? styles.dark : styles.light} absolute top-0 h-full w-full z-[-1] opacity-[0.25]`} />
              <div 
                className="absolute top-0 h-full w-full"
                style={{
                  background: `${
                    darkMode
                      ? "linear-gradient(-5deg, rgba(0, 0, 0, .5) 50%, rgba(155, 50, 255,.15) 100%)"
                      : "linear-gradient(-5deg, rgba(255, 255, 255, .25) 60%, rgba(75, 50, 255, .30) 100%)"
                  }`
                }}
              />
            </div>
          </div>
          <div
            className="absolute top-0 w-full pb-16"
            ref={contentRef}
          >
            <AboutMe />
            <Websites />
            {/* <GetInTouch /> */}
          </div>
        </div>
      </div>
    </>
  );
};