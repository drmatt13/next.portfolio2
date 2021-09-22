import { useContext } from 'react'

// context
import _appContext from '../context/_appContext'

const ThemeButton = () => {

  const { darkMode, setDarkMode } = useContext(_appContext)

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

  return <>
    <div
      onClick={toggleDarkMode} 
      className={`
        ${darkMode ? "dark" : "light"}
        h-12 
        w-12 
        mx-2 
        my-2.5 
        rounded-full 
        bg-white 
        hover:bg-yellow-300 
        dark:bg-gray-700 
        dark:hover:bg-purple-500 
        dark:text-gray-300 
        dark:hover:text-black
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
