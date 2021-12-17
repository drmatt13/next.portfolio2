import { useContext } from "react";
import Image from "next/image";
import Head from "next/head";

// components
import MirrorIcons from "../components/MirrorIcons";
import MobileSliderCards from "../components/MobileSliderCards";

// context
import _appContext from "../context/_appContext";

// styles
import styles from "../styles/Home.module.scss";
import glitch from "../styles/glitch.module.scss";

export default function Home() {
  const { darkMode, mobile } = useContext(_appContext);

  return (
    <>
      <style global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
      <div
        className={`${darkMode ? styles.dark : styles.light} animate-fade-in`}
        style={{
          minWidth: "350px",
        }}
      >
        {/* SECTION 1 */}
        <div className={`${styles.header} relative flex flex-col sm:flex-row`}>
          <div
            className="absolute -top-28 w-full"
            style={{
              height: "calc(100% + 7rem)",
              opacity: 0.25,
              zIndex: -1,
            }}
          />
          <div className="absolute flex flex-col sm:flex-row-reverse bottom-4 right-6 md:bottom-5 md:right-10 lg:bottom-6 lg:right-12">
            <div
              className={`${styles.rainbow_button} flex justify-center items-center py-3 px-4 text-xs md:py-3 md:px-6 md:text-sm lg:py-4 lg:px-8 lg:text-base bg-green-400 dark:bg-pink-500 text-black dark:text-white font-bold select-none cursor-pointer hover:scale-105 hover:shadow-xl transition-transform`}
            >
              GET IN TOUCH
            </div>
            <div
              className={`${styles.rainbow_button} flex justify-center items-center mt-2 sm:mt-0 sm:mr-4 py-3 px-4 text-xs md:py-3 md:px-6 md:text-sm lg:py-4 lg:px-8 lg:text-base bg-black dark:bg-gray-900 text-white font-bold select-none cursor-pointer hover:scale-105 hover:shadow-xl transition-transform`}
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
                className="text-2xl sm:text-2xl sm:mt-10 md:text-3xl lg:text-4xl lg:mt-0 xl:text-5xl"
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
              <div className="absolute grid grid-cols-4">
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

        {/* SECTION 2 + 3 + Footer Background container */}
        <div className={`${styles.body} relative`}>
          <div
            className="absolute h-full w-full"
            style={{
              opacity: "0.25",
              zIndex: -1,
            }}
          />
          {/* SECTION 2 */}
          <div
            className="relative text-gray-800 dark:text-white"
            style={{ minHeight: "25vh" }}
          >
            <div
              className="absolute h-full w-full"
              style={{
                background: `${
                  darkMode
                    ? "linear-gradient(-5deg, rgba(0, 0, 0, .5) 40%, rgba(155, 50, 255,.25) 100%)"
                    : "linear-gradient(-7deg, rgba(255, 255, 255, .25) 50%, rgba(75, 50, 255, .5) 100%)"
                }`,
                zIndex: -1,
              }}
            />
            <div className="text-5xl py-12 text-center">
              <p
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                  letterSpacing: "0.25em",
                }}
              >
                Websites
              </p>
            </div>
            <p className="px-6 pb-12 text-center">
              check out some of my other web projects, i hope you like them :)
            </p>
          </div>
          <div className="relative overflow-x-hidden sm:overflow-x-visible">
            <div
              className="absolute h-full w-full"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 75%)",
                background: `${
                  darkMode ? "rgba(0, 0, 0, .5)" : "rgba(255, 255, 255, .25)"
                }`,
              }}
            />
            {/* Mobile slider */}
            <div className="sm:hidden">
              <MobileSliderCards
                cards={[
                  styles.placeholder3,
                  styles.placeholder2,
                  styles.placeholder1,
                ]}
                style={styles.placeholder}
              />
            </div>
            {/* Mobile slider */}
            <div
              className="hidden sm:flex justify-evenly"
              style={{
                maxWidth: 1200,
                margin: "0 auto",
              }}
            >
              <div className={`${styles.card} group`}>
                <div className="absolute h-4/5 z-10 bg-gray-900 bg-gradient-to-b from-white dark:from-gray-900 to-blue-400 dark:to-purple-600 translate-y-full group-hover:translate-y-1/4 opacity-0 group-hover:opacity-100 transition group-hover:duration-300 duration-700">
                  Test
                </div>
                <div className={styles.design1} />
              </div>
              <div className={`${styles.card} group`}>
                <div className="absolute h-4/5 z-10 bg-gray-900 bg-gradient-to-b from-white dark:from-gray-900 to-blue-400 dark:to-purple-600 translate-y-full group-hover:translate-y-1/4 opacity-0 group-hover:opacity-100 transition group-hover:duration-300 duration-700">
                  Test
                </div>
                <div className={styles.design2} />
              </div>
              <div className={`${styles.card} group`}>
                <div className="absolute h-4/5 z-10 bg-gray-900 bg-gradient-to-b from-white dark:from-gray-900 to-blue-400 dark:to-purple-600 translate-y-full group-hover:translate-y-1/4 opacity-0 group-hover:opacity-100 transition group-hover:duration-300 duration-700">
                  Test
                </div>
                <div className={styles.design3} />
              </div>
            </div>
          </div>
          <div className="h-12" />
          {/* SECTION 3 */}
          {/* <div></div> */}
          {/* FOOTER */}
          <div
            className="flex items-center justify-evenly bg-blue-500 dark:bg-purple-800 opacity-30"
            style={{ height: "25vh", maxHeight: "125px" }}
          ></div>
        </div>
      </div>
    </>
  );
}
