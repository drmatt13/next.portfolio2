const WebsiteCard = ({ data: { src, alt, title, description, link, button } }) => {
  return <>
    <style jsx>{`
      .card {

      }
    `}</style>
    <div className="overflow-hidden border border-indigo-900/30 dark:border-purple-500/10 flex flex-col items-start bg-white dark:bg-slate-700 rounded-lg shadow-lg shadow-indigo-600/50 dark:shadow-purple-500/50 sm:w-1/3 sm:h-[18rem] md:h-[22rem] md:min-w-[16rem] md:w-[30%] md:max-w-[17rem] lg:h-[22rem] xl:max-w-xs xl:h-[26rem]">
      <div className="relative flex-[1.25] h-full w-full">
        <img className="absolute object-cover w-full h-full" src={src} alt="img" />
      </div>
      <div className="h-1 w-full bg-indigo-600/50 dark:bg-purple-500/75"/>
      <div className="flex-1 flex flex-col">
        <div className="py-2 text-center dark:text-white text-xl">{title}</div>
        <div className="px-2 flex-1 dark:text-white">{description}</div>
        <div className="text-white text-xl no-select cursor-pointer mb-2 mt-3 mx-4 py-2 rounded-md text-center bg-indigo-500/75 hover:bg-indigo-500/60 dark:bg-pink-500 dark:hover:bg-pink-400 transition-all">
          {button}
        </div>
      </div>
    </div>
  </>
}

export default WebsiteCard
