import { useContext, useRef } from 'react'

// context
import _appContext from '../context/_appContext'

const ThemeButton = () => {

  const { darkMode, setDarkMode } = useContext(_appContext)

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
    ref.current.classList.remove("dark:text-gray-300")
    ref.current.classList.add("bg-yellow-300", "dark:bg-purple-500", "dark:text-black")
  }

  const touchEnd = () => {
    ref.current.classList.add("dark:text-gray-300")
    ref.current.classList.remove("bg-yellow-300", "dark:bg-purple-500", "dark:text-black")
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
        h-12 
        w-12 
        mx-2 
        my-2.5 
        rounded-full
        bg-white
        dark:bg-gray-700 
        dark:text-gray-300 
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
