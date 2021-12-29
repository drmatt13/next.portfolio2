// import { useEffect, useRef } from 'react';

const WebsiteCard = ({ data: { src, title, description, link, button }, parentRef, flagMemo = {} }) => {
  return <>
    <div className="group snap-center overflow-hidden border border-indigo-900/30 dark:border-gray-700/30 flex flex-col items-start bg-white dark:bg-slate-700 rounded-sm sm:rounded-lg shadow-lg shadow-indigo-600/50 dark:shadow-purple-500/50 hover:shadow-indigo-500 dark:hover:shadow-pink-500 min-w-[14rem] h-[20rem] md:min-w-[16rem] md:h-[22rem] xl:max-w-xs xl:min-w-[20rem] xl:h-[26rem] transition-shadow duration-300 ease-out">
      <div className="relative flex-[1.25] group-hover:flex-[1.1] h-full w-full transition-all ease-in select-none">
        <img className="absolute object-cover w-full h-full" src={src} alt={title} draggable="false" />
      </div>
      <div className="h-1 w-full bg-indigo-600/50 dark:bg-purple-500/75"/>
      <div className="flex-1 flex flex-col">
        <div className="py-2 text-center dark:text-white lg:text-lg xl:text-xl">{title}</div>
        <div className="px-2 flex-1 dark:text-white text-[.8rem] lg:text-sm xl:text-base">{description}</div>
        <div className="text-white text-sm xl:text-xl no-select cursor-pointer mb-2 mt-3 mx-4 py-2 rounded-sm sm:rounded-md text-center bg-indigo-500/75 hover:bg-indigo-500/60 dark:bg-pink-500 dark:hover:bg-pink-400 transition-all duration-100 select-none">
          {button}
        </div>
      </div>
    </div>
  </>
}

export default WebsiteCard
