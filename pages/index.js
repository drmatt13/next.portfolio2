import { useState, useEffect, useContext, useRef } from "react";
import Head from "next/head";
// import Image from "next/image";

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
      title: "Banned Social",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Welcome Anon",
    },
    {
      src: "/images/home/dog.png",
      title: "Pupper Space",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Doggo!",
    },
    {
      src: "/images/home/pinkclouds.jpg",
      title: "Cloud 9",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Find out more",
    },
    {
      src: "/images/home/placeholder3.png",
      title: "Unsplash",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Upload Images",
    },
    {
      src: "/images/home/placeholder2.png",
      title: "e Store",
      description: "Lorem ipsum, dolor iusto repellendus modi ipsum dolor. sit",
      link: "/",
      button: "Shop Now",
    },
  ])
  return (
    <>
      <Head>
        <title>Home | Matthew Sweeney</title>
      </Head>
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
            <div className={`${styles.svg_master_container} relative select-none mt-10 sm:mt-12 lg:mt-24 2xl:mt-36`}>
              <div className="absolute grid grid-cols-4">
                <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/>
              </div>
              <img className="relative" src="/images/home/test1.svg" />
            </div>
          </div>
        </div>
        {/* SECTION 2 */}
        <div className="relative /h-screen h-[200vh]">
          
          <div className="sticky -top-28 h-screen w-full">
            <div className={`${styles.body} relative h-full w-full`}>
              <div className="absolute top-0 h-full w-full z-[-1] opacity-[0.25]"/>
              <div 
                className="absolute top-0 h-full w-full"
                style={{
                  background: `${
                    darkMode
                      ? "linear-gradient(-5deg, rgba(0, 0, 0, .5) 40%, rgba(155, 50, 255,.25) 100%)"
                      : "linear-gradient(-7deg, rgba(255, 255, 255, .25) 50%, rgba(75, 50, 255, .5) 100%)"
                  }`
                }}
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full">
            <div className="text-gray-800 dark:text-white">
              <div className="text-2xl sm:text-4xl lg:text-5xl py-8 sm:py-12 text-center">
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: "0.25em",
                  }}
                >
                  <span className={`${glitch.text}`} data-text="WEBSITES">
                    WEBSITES
                  </span>
                </p>
              </div>
              <p className="px-6 text-center text-sm sm:text-md lg:text-base">
                check out some of my other web projects, i hope you like them :)
              </p>
            </div>
            <div className="flex justify-center overflow-x-visible">
              <style jsx>{`
                div::-webkit-scrollbar-thumb {
                  background-color: ${darkMode ? "rgb(236, 72, 153)" : "rgba(99, 102, 241, 0.75)"};
                }
                div::-webkit-scrollbar-thumb:hover {
                  background-color: ${darkMode ? "rgb(244, 114, 182)" : "rgba(99, 102, 241, 0.6)"}
                }
                div::-webkit-scrollbar-track {
                  background: ${darkMode ? "rgba(255, 255, 255, 0.125)" : "rgba(0, 0, 0, 0.125)"};
                }
              `}</style>
              <div className={`${styles.card_scroll} pt-12 pb-10 mb-12 sm:pt-16 sm:pb-14 flex /w-1 /px-80 w-full px-[50%] snap-x gap-8 overflow-auto`}>
                {cards && cards.map((data, index) => (
                  <WebsiteCard key={index} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
