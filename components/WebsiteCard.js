import { useState, useContext } from 'react'
import Image from "next/image"
import Link from "next/link" 

// context
import _appContext from "../context/_appContext"

const WebsiteCard = ({ data: { src, blurDataURL, title, description, link, button, dimensions: { width, height } }, parentRef, flagMemo = {} }) => {

  const { darkMode } = useContext(_appContext);
  
  const [loading, setLoading] = useState(true);

  return <>

    <style jsx>{`
      .scroll::-webkit-scrollbar { width: 6px }
      .scroll::-webkit-scrollbar-thumb { border-radius: 5px }
      .scroll::-webkit-scrollbar-track { border-radius: 5px }
      .scroll::-webkit-scrollbar-thumb {
        background-color: ${darkMode ? "rgb(236, 72, 153)" : "rgba(99, 102, 241, 0.75)"}
      }
      .scroll::-webkit-scrollbar-thumb:hover {
        background-color: ${darkMode ? "rgb(244, 114, 182)" : "rgba(99, 102, 241, 0.6)"}
      }
      .scroll::-webkit-scrollbar-track {
        background: ${darkMode ? "rgba(255, 255, 255, 0.125)" : "rgba(0, 0, 0, 0.125)"}
      }
    `}</style>

    <div className="snap-center snap-always group flex flex-col justify-between overflow-hidden border border-indigo-900/30 dark:border-gray-700/30 bg-white dark:bg-slate-700/75 rounded-lg min-w-[14rem] h-[20rem] md:min-w-[16rem] md:h-[22rem] xl:max-w-xs xl:min-w-[20rem] xl:h-[26rem]">

      <div className="relative flex overflow-hidden flex-[1.1] transition-all ease-in select-none">
        <div className="flex w-full group-hover:scale-105 transition-all ease-in">
          <Image src={src} alt={title} draggable={false} height={height} width={width} objectFit="cover" placeholder='blur' blurDataURL={blurDataURL} />
        </div>
      </div>
      
      <div className="h-1 w-full bg-indigo-600/50 dark:bg-purple-500/75"/>
      
      <div className="flex-1 flex flex-col justify-between overflow-hidden">
        <div className="py-2 text-center dark:text-white lg:text-lg xl:text-xl">{title}</div>
        <div className="scroll ml-2.5 pl-1.5 mr-2 flex-1 dark:text-white text-[.8rem] lg:text-sm xl:text-base overflow-y-auto">{description}</div>
        <div 
          className="text-white text-sm xl:text-xl no-select cursor-pointer mb-2 mt-3 mx-4 py-2 rounded-sm sm:rounded-md text-center bg-indigo-500/75 hover:bg-indigo-500/60 dark:bg-pink-500 dark:hover:bg-pink-400 transition-all duration-100 select-none"
          onClick={() => window.open(link, '_blank').focus()}
        >  
          {button}
        </div>
      </div>

    </div>

  </>
}

export default WebsiteCard
