import { useContext, useRef } from 'react'

// context
import _appContext from '../context/_appContext'

const ThemeButton = () => {

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
      ref.current.classList.remove("dark:text-gray-300")
      ref.current.classList.add("bg-yellow-300", "dark:bg-purple-500", "dark:text-black")
    }
  }

  const touchEnd = () => {
    if (mobile) {
      ref.current.classList.add("dark:text-gray-300")
      ref.current.classList.remove("bg-yellow-300", "dark:bg-purple-500", "dark:text-black")
    }
  }

  return <>
    <div
      ref={ref}
      onClick={toggleDarkMode}
      onMouseEnter={touchStart}
      onTouchStart={touchStart}
      onMouseLeave={touchEnd}
      onTouchEnd={touchEnd}
      className={`
        ${darkMode ? "dark" : "light"}
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
        ${!mobile ? "hover:bg-yellow-300 dark:hover:bg-purple-500 dark:hover:text-black" : ""}
        flex 
        justify-center 
        items-center 
        hover:shadow 
        hover:cursor-pointer 
        transition-colors 
        duration-200 
        ease-out
    `}>
      <i className={`${darkMode ? "far fa-moon" : "fas fa-sun"}`} />
    </div>
  </>
}

export default ThemeButton
