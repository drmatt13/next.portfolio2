import { useEffect, useContext, useRef } from 'react'

// context
import _appContext from '../context/_appContext'

const NavButton = ({ icon, onClick, active, darkButton=null }) => {

  const { darkMode, setDarkMode, mobile } = useContext(_appContext)

  const ref = useRef()

  const toggleDarkMode = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setDarkMode(true)
    }
  }

  const touchStart = () => {
    if (mobile) {
      ref.current.classList.remove("dark:text-gray-300", "bg-white", "dark:hover:text-black", "hover:shadow", "hover:bg-yellow-300", "dark:hover:bg-purple-500", "hover:bg-green-300", "dark:hover:bg-green-300")
      if (darkButton) ref.current.classList.add("bg-yellow-300", "dark:bg-purple-500", "dark:text-black")
      else ref.current.classList.add("dark:bg-green-300", "dark:text-black", "bg-green-300")
    }
  }

  const touchEnd = () => {
    if (mobile) {
      ref.current.classList.add("dark:text-gray-300", "bg-white")
      if (darkButton) ref.current.classList.remove("bg-yellow-300", "dark:bg-purple-500", "dark:text-black")
      else ref.current.classList.remove("dark:bg-green-300", "dark:text-black", "bg-green-300")
    }
  }

  useEffect(() => {
    if (mobile) {
      ref.current.classList.remove("dark:hover:text-black", "hover:shadow", "hover:bg-yellow-300", "dark:hover:bg-purple-500", "hover:bg-green-300", "dark:hover:bg-green-300")
    }
  }, [darkMode, setDarkMode, mobile])

  return <>
  <style jsx>{`
    .dark {
      ${active ? `
        background-color: rgba(52, 211, 153) !important;
        color: black;` : 
        ``
      }
    }
    .light {
      ${active ? `background-color: rgba(52, 211, 153) !important;` : ``}
    }
  `}</style>
    <div
      ref={ref}
      onClick={darkButton ? toggleDarkMode : onClick} 
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
      className={`
        ${darkMode ? "dark" : "light"}
        flex 
        justify-center 
        items-center        
        hover:cursor-pointer 
        transition-colors 
        duration-200 
        ease-out
        text-sm
        h-10
        w-10
        mx-1
        my-2
        sm:text-lg
        sm:h-11
        sm:w-11
        sm:mx-1.5  
        md:text-xl
        md:h-12 
        md:w-12 
        md:mx-2 
        md:my-2.5 
        rounded-full
        bg-white
        dark:bg-gray-700 
        dark:text-gray-300
        dark:hover:text-black
        hover:shadow
        ${darkButton ? 
          `hover:bg-yellow-300 dark:hover:bg-purple-500`
          :
          `hover:bg-green-300 dark:hover:bg-green-300`
        }
    `}>
      {darkButton && <i className={`${darkMode ? "far fa-moon" : "fas fa-sun"}`} />}
      {!darkButton && <i className={icon} />}
    </div>
  </>
}

export default NavButton
