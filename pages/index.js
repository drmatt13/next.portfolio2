import { useContext } from 'react'
import Image from 'next/image'
import Head from 'next/head'

// components
import MirrorIcons from '../components/MirrorIcons'

// context
import _appContext from '../context/_appContext'

// styles
import styles from '../styles/Home.module.scss'

export default function Home() {

  const { darkMode, mobile } = useContext(_appContext)

  return <>
    <style>{`
    .first {
      height: clamp(50vh, 40vw, 1000px)
    }
    @media (max-width: 639px) {
      .first {
        height: auto;
      }
    }
    .custom-text {
      font-family: 'IBM Plex Mono', monospace;
    }
    .flex-7 {
      flex: 7;
    }
    .svg {
      height: clamp(40vh, 30vw, 550px);
      max-width: 95%;
    }
    .second {
      height: clamp(450px, 60vw, 1000px)
    }
    @media (max-width: 639px) {
      .second {
        height: 200vh
      }
    }
    .gradient {
      background: rgb(255,255,255);
      ${darkMode ? 
        `background: linear-gradient(-5deg, rgba(0,0,0,.5) 40%, rgba(155, 50, 255,.25) 100%);` :
        `background: linear-gradient(-7deg, rgba(255,255,255,.25) 50%, rgba(155, 50, 255,.5) 100%);`
      }
    }
    .placeholder1 {
      background: lightblue url("/images/home/placeholder1.png") center;
    }
    .placeholder2 {
      background: lightblue url("/images/home/placeholder2.png") center
    }
    .placeholder3 {
      background: lightblue url("/images/home/placeholder3.png") center
    }
    .placeholder {
      background-size: cover;
      width: clamp(25vh, 28vw, 400px);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    @media (max-width: 639px) {
      .placeholder {
        height: 50vh;
        width: clamp(35vh, 40vw, 400px);
        margin-bottom: 20px;
        border-radius: 25px;
      }
    }
    `}</style>
    <div className="first flex flex-col sm:flex-row">
      
      <div className="sm:flex-1 flex flex-col">  
        <div className="mb-10 flex-7 flex items-center justify-center text-gray-800 dark:text-white">
          <div className="custom-text text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <div>Hi,</div>
            <div>I'm <span className={styles.rainbow_underline}><span className={`${styles.glitch}`} data-text="MATT">MATT</span></span>,</div>
            <div>Full stack developer</div>
          </div>
        </div>
        <div className="flex-1 hidden sm:flex justify-center">
          <MirrorIcons />
        </div>
      </div>

      <div className="sm:flex-1 flex justify-center items-end">
        <img className="svg" src="/images/home/test2.svg" />
      </div>
    </div>
    <div className="second relative">
      <div 
        className="h-full w-full flex flex-col gradient bg-black bg-opacity-25 dark:bg-red-200 dark:bg-opacity-10" 
        style={{clipPath: "polygon(0 0, 100% 0, 100% 52.5%, 0 72.5%)"}}
      />
      <div className="absolute top-0 h-full w-full flex flex-col">
        <div className="flex flex-col items-center justify-evenly text-gray-800 dark:text-white" style={{flex: ".5"}}>
          <div className="text-5xl">Heading</div>
          <div>kasdmsmdmsdm sdf sdf sdf sdfsdfsdf  sdfsdfsdf  sdfsdfsdf </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col sm:flex-row justify-evenly items-center sm:items-stretch">
            <div className="placeholder1 placeholder cursor-pointer rounded-2xl shadow-2xl"></div>
            <div className="placeholder2 placeholder cursor-pointer rounded-2xl shadow-2xl"></div>
            <div className="placeholder3 placeholder cursor-pointer rounded-2xl shadow-2xl"></div>
          </div>
          <div style={{flex: ".2"}}></div>
        </div>
      </div> 
    </div>
    <div className="w-full flex justify-center">
      <div className="w-11/12 h-1 bg-black bg-opacity-25 dark:bg-red-200 dark:bg-opacity-10 rounded-full" />
    </div>
    <div style={{height: "75vh"}}>

    </div>
    <div className="gradient flex items-center justify-evenly" style={{height: "25vh"}}>
      Footer
    </div>
  </>
}