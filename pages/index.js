import { useContext } from "react";
import Image from "next/image";
import Head from "next/head";

// components
import MirrorIcons from "../components/MirrorIcons";

// context
import _appContext from "../context/_appContext";

// styles
import styles from "../styles/Home.module.scss";
import glitch from "../styles/glitch.module.scss";

export default function Home() {
  const { darkMode, mobile } = useContext(_appContext);

  return (
    <>
      <style>{`
    `}</style>
      <div
        className="animate-fade-in"
        style={{
          minWidth: "350px",
        }}
      >
        <div className="relative flex flex-col sm:flex-row">
          <div
            className={`${
              darkMode ? styles.section1_dark : styles.section1_light
            } absolute -top-28 w-full`}
            style={{
              height: "calc(100% + 7rem)",
              opacity: 0.25,
              zIndex: -1,
            }}
          >
            {/* lol */}
          </div>
          <div className="absolute flex flex-col sm:flex-row-reverse bottom-4 right-6 md:bottom-5 md:right-10 lg:bottom-6 lg:right-12">
            <div
              className={`${styles.get_in_touch} flex justify-center items-center py-3 px-4 text-xs md:py-3 md:px-6 md:text-sm lg:py-4 lg:px-8 lg:text-base bg-green-400 dark:bg-pink-500 text-black dark:text-white font-bold select-none cursor-pointer hover:scale-105 hover:shadow-xl transition-transform`}
            >
              GET IN TOUCH
            </div>
            <div
              className={`${styles.get_in_touch} flex justify-center items-center mt-2 sm:mt-0 sm:mr-4 py-3 px-4 text-xs md:py-3 md:px-6 md:text-sm lg:py-4 lg:px-8 lg:text-base bg-black dark:bg-gray-900 text-black text-white font-bold select-none cursor-pointer hover:scale-105 hover:shadow-xl transition-transform`}
            >
              ABOUT ME
            </div>
          </div>
          <div className="sm:flex-1 flex flex-col">
            <div
              className="flex items-center justify-center text-gray-800 dark:text-white"
              style={{ flex: 7 }}
            >
              <div
                className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                <div>Hi,</div>
                <div>
                  {"I'm"}{" "}
                  <span className={`${glitch.text}`} data-text="MATT">
                    MATT
                  </span>
                  ,
                </div>
                <div>Full stack developer</div>
              </div>
            </div>
            <div className="flex-1 hidden sm:flex justify-center">
              {/* PLACEHOLDER */}
              <MirrorIcons />
              {/* <div className="h-24 w-full mx-10 mb-4 bg-blue-500 bg-opacity-50" /> */}
              {/* PLACEHOLDER */}
            </div>
          </div>
          <div className="sm:flex-1 flex justify-center items-end">
            <div
              className={`${styles.svg_master_container} relative select-none mt-10 sm:mt-24 2xl:mt-36`}
            >
              <div
                className={`${
                  darkMode ? styles.dark : styles.light
                } absolute grid grid-cols-4`}
              >
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <img className="relative" src="/images/home/test1.svg" />
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="relative">
          <div
            className={`${
              darkMode ? styles.section2_dark : styles.section2_light
            } absolute h-full w-full`}
            style={{
              // backgroundImage: `url(/images/home/AdobeStock_121270629.jpeg)`,
              // backgroundSize: "cover",
              // backgroundPosition: "left",
              // backgroundRepeat: "no-repeat",
              opacity: "0.25",
            }}
          />
          <div className={`${styles.section2} relative`}>
            <div className="h-full w-full flex flex-col" />
            <div className="absolute top-0 h-full w-full flex flex-col">
              <div
                className="flex-1 flex flex-col items-center justify-evenly text-gray-800 dark:text-white"
                style={{
                  maxHeight: "300px",
                  background: `${
                    darkMode
                      ? "linear-gradient(-5deg, rgba(0, 0, 0, .5) 40%, rgba(155, 50, 255,.25) 100%)"
                      : "linear-gradient(-7deg, rgba(255, 255, 255, .25) 50%, rgba(75, 50, 255, .5) 100%)"
                  }`,
                }}
              >
                <div className="text-5xl">Live Websites</div>
                <div>check out some of my websites, i hope you like them</div>
              </div>
              <div className="relative sm:flex-1 flex flex-col select-none">
                <div
                  className="absolute h-full w-full"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 75%)",
                    background: `${
                      darkMode
                        ? "rgba(0, 0, 0, .5)"
                        : "rgba(255, 255, 255, .25)"
                    }`,
                  }}
                />
                {/* Mobile Touch */}
                <div className="sm:hidden z-10 flex justify-center">
                  <div
                    className={`${styles.placeholder1} ${styles.placeholder} cursor-pointer rounded-2xl shadow-2xl`}
                  ></div>
                  {/* <div
                  className={`${styles.placeholder1} ${styles.placeholder} cursor-pointer rounded-2xl shadow-2xl`}
                ></div>
                <div
                  className={`${styles.placeholder1} ${styles.placeholder} cursor-pointer rounded-2xl shadow-2xl`}
                ></div> */}
                </div>
                {/* Mobile Touch */}
                <div className="hidden flex-1 sm:flex justify-center items-stretch z-10">
                  <div
                    className={`${styles.placeholder1} ${styles.placeholder} mx-8 cursor-pointer rounded-2xl shadow-2xl`}
                  ></div>
                  <div
                    className={`${styles.placeholder2} ${styles.placeholder} mx-8 cursor-pointer rounded-2xl shadow-2xl`}
                  ></div>
                  <div
                    className={`${styles.placeholder3} ${styles.placeholder} mx-8 cursor-pointer rounded-2xl shadow-2xl`}
                  ></div>
                </div>
              </div>
              <div className="hidden sm:block" style={{ flex: ".2" }} />
            </div>
          </div>

          {/* SECTION 3 */}

          <div
            className="p-10"
            style={{
              height: "75vh",
              // backgroundColor: "#fff8",
            }}
          >
            {/* <div className="h-full w-full flex flex-col bg-white bg-opacity-50 rounded-2xl" /> */}
          </div>
          {/* FOOTER */}

          <div
            className="flex items-center justify-evenly bg-blue-700 dark:bg-purple-900 bg-opacity-25"
            style={{ height: "25vh", maxHeight: "125px" }}
          ></div>
        </div>
      </div>
    </>
  );
}
