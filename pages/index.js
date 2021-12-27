import { useState, useContext } from "react";
import Image from "next/image";
import Head from "next/head";

// components
import MirrorIcons from "../components/MirrorIcons";
import WebsiteCard from "../components/WebsiteCard";

// context
import _appContext from "../context/_appContext";

// styles
import styles from "../styles/Home.module.scss";
import glitch from "../styles/glitch.module.scss";

export default function Home() {
  const { darkMode, mobile } = useContext(_appContext);
  const [cards] = useState([
    {
      src: "/images/home/placeholder1.png",
      alt: "card",
      title: "Banned Social",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Welcome Anon",
    },
    {
      src: "/images/home/dog.png",
      alt: "card",
      title: "Pupper Space",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Doggo!",
    },
    {
      src: "/images/home/pinkclouds.jpg",
      alt: "card",
      title: "Cloud 9",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Find out more",
    },
    {
      src: "/images/home/placeholder3.png",
      alt: "card",
      title: "Unsplash",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Upload Images",
    },
    {
      src: "/images/home/placeholder2.png",
      alt: "card",
      title: "e Store",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Shop Now",
    },
  ])
  return (
    <>
      <div className={`${darkMode ? styles.dark : styles.light} min-w-[350px] animate-fade-in`}>
        {/* SECTION 1 */}
        <div className={`${styles.header} relative flex flex-col sm:flex-row`}>
          <div
            className="absolute -top-28 w-full opacity-[.25] z-[-1]"
            style={{
              height: "calc(100% + 7rem)"
            }}
          />
          <div className="absolute flex flex-col sm:flex-row-reverse bottom-4 right-6 md:bottom-5 md:right-10 lg:bottom-6 lg:right-12">
            <div
              className={`${styles.rainbow_button} flex justify-center items-center py-3 px-4 text-xs md:py-3 md:px-6 md:text-sm lg:py-4 lg:px-8 lg:text-base bg-green-400 dark:bg-pink-500 text-black dark:text-white font-bold select-none cursor-pointer hover:scale-105 hover:shadow-xl transition-transform`}
              style={{
                transitionProperty: "background-color, border-color, color, fill, stroke, transform",
              }}
            >
              GET IN TOUCH
            </div>
            <div
              className={`${styles.rainbow_button} flex justify-center items-center mt-2 sm:mt-0 sm:mr-4 py-3 px-4 text-xs md:py-3 md:px-6 md:text-sm lg:py-4 lg:px-8 lg:text-base bg-black dark:bg-gray-900 text-white font-bold select-none cursor-pointer hover:scale-105 hover:shadow-xl transition-transform`}
            >
              ABOUT ME
            </div>
          </div>
          <div className="flex flex-col sm:w-[50%]">
            <div className="flex-[7] flex items-center justify-center text-gray-800 dark:text-white">
              <div
                className="flex-shrink text-2xl sm:translate-y-[25%] md:pl-6 md:mb-0 md:text-3xl md:translate-y-[10%] lg:pl-0 lg:mb-0 lg:text-4xl lg:mt-0 lg:translate-y-0 xl:text-5xl whitespace-nowrap 4xl:pl-[5%] 4xl:text-6xl"
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
            <div className="flex-1 hidden sm:flex justify-center animate-fade-in">
              <MirrorIcons />
            </div>
          </div>
          <div className="sm:flex-1 flex justify-center items-end">
            <div
              className={`${styles.svg_master_container} relative select-none mt-10 sm:mt-12 lg:mt-24 2xl:mt-36`}
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
        {/* SECTION 2 Footer Background container */}
        <div className={`${styles.body} relative`}>
          <div className="absolute h-full w-full z-[-1] opacity-[0.25]" />
          <div className="relative text-gray-800 dark:text-white">
            <div
              className="absolute h-full w-full z-[-1]"
              style={{
                background: `${
                  darkMode
                    ? "linear-gradient(-5deg, rgba(0, 0, 0, .5) 40%, rgba(155, 50, 255,.25) 100%)"
                    : "linear-gradient(-7deg, rgba(255, 255, 255, .25) 50%, rgba(75, 50, 255, .5) 100%)"
                }`
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
            <p className="px-6 text-center">
              check out some of my other web projects, i hope you like them :)
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute h-full w-full z-[-1]"
              style={{
                background: `${
                  darkMode ? "rgba(0, 0, 0, .5)" : "rgba(255, 255, 255, .25)"
                }`,
              }}
            />
            <div>
              {/* mobile */}
              {/* <div className="flex sm:hidden justify-evenly">
                <div className="h-24 w-full"></div>
              </div> */}
              {/* desktop */}
              <div className="py-12 sm:py-24 w-full flex px-[50%] snap-x gap-8 overflow-auto select-none">
                {/* <div className="hidden max-w-7xl w-full lg:w-[85%] xl:w-[80%] 2xl:w-[70%] sm:flex justify-start"> */}
                  {cards && cards.map((data, index) => (
                    <WebsiteCard key={index} data={data} />
                  ))}
                </div>
              {/* </div> */}
              {/* desktop */}
              {/* <div className="h-24" /> */}


              {/* <div className="h-[25vh] max-h-[125px] text-white flex items-center justify-evenly bg-indigo-400/40 dark:bg-purple-800/30">
                Footer
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
