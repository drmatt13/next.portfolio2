import { useContext } from 'react'
import Image from 'next/image'
import Head from 'next/head'

// components
import MirrorIcons from '../components/MirrorIcons'

// context
import _appContext from '../context/_appContext'

// styles
import styles from '../styles/Home.module.scss'
import glitch from '../styles/glitch.module.scss'

export default function Home() {

  const { darkMode, mobile } = useContext(_appContext)

  return <>
    <style>{`
    `}</style>
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:flex-1 flex flex-col">  
          <div className="flex items-center justify-center text-gray-800 dark:text-white" style={{flex: 7}}>
            <div className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" style={{fontFamily: "'IBM Plex Mono', monospace"}}>
              <div>Hi,</div>
              <div>{"I'm"} <span className={`${glitch.text}`} data-text="MATT">MATT</span>,</div>
              <div>Full stack developer</div>
            </div>
          </div>
          <div className="flex-1 hidden sm:flex justify-center">
            <MirrorIcons />
          </div>
        </div>
        <div className="sm:flex-1 flex justify-center items-end">
          <div className={`${styles.svg_master_container} relative select-none mt-10 sm:mt-24 2xl:mt-36`}>
            <div className={`${darkMode ? styles.dark : styles.light} absolute grid grid-cols-4`}>
              <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/>
            </div>
            <img className="relative" src="/images/home/test1.svg" />
          </div>
        </div>
      </div>
      <div className="relative" style={{height: "clamp(25vh, 70vw, 800px)"}}>
        <div 
          className="h-full w-full flex flex-col bg-black bg-opacity-25 dark:bg-red-200 dark:bg-opacity-10" 
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 52.5%, 0 72.5%)",
            background: `${darkMode ? 
              "linear-gradient(-5deg, rgba(0, 0, 0, .5) 40%, rgba(155, 50, 255,.25) 100%)" : 
              "linear-gradient(-7deg, rgba(255, 255, 255, .25) 50%, rgba(155, 50, 255, .5) 100%)"
            }`
          }}
        />
        <div className="absolute top-0 h-full w-full flex flex-col">
          <div 
            className="flex-1 flex flex-col items-center justify-evenly text-gray-800 dark:text-white"
            style={{maxHeight: "300px"}}
          >
            <div className="text-5xl">Heading</div>
            <div>kasdmsmdmsdm sdf sdf sdf sdfsdfsdf  sdfsdfsdf  sdfsdfsdf </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex justify-center items-center sm:items-stretch">
              <div className={`${styles.placeholder1} ${styles.placeholder} mx-8 cursor-pointer rounded-2xl shadow-2xl`}></div>
              <div className={`${styles.placeholder2} ${styles.placeholder} mx-8 cursor-pointer rounded-2xl shadow-2xl`}></div>
              <div className={`${styles.placeholder3} ${styles.placeholder} mx-8 cursor-pointer rounded-2xl shadow-2xl`}></div>
            </div>
            <div style={{flex: ".2"}}></div>
          </div>
        </div> 
      </div>
      <div style={{height: "75vh"}}>
      </div>
      <div className="flex items-center justify-evenly bg-black bg-opacity-20" style={{height: "25vh"}}>
        Footer
      </div>
    </div>
  </>
}