import { useState, useContext } from 'react'

// components
import GlitchText from "../GlitchText";
import WebsiteCard from '../WebsiteCard'

// context
import _appContext from "../../context/_appContext";

// styles
import styles from "../../styles/Home.module.scss";
import glitch from "../../styles/glitch.module.scss";

const Websites = () => {

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
      <div className="text-gray-800 dark:text-white">
        <div 
          className="text-2xl sm:text-4xl lg:text-5xl py-8 sm:py-12 text-center"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.25em",
          }}
        >
          <GlitchText text="WEBSITES" />
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
    </>
  )
}

export default Websites
