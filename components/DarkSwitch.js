import { useContext } from 'react'

// context
import _appContext from '../context/_appContext'

const DarkSwitch = () => {

  const { setDarkMode } = useContext(_appContext)

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

  return <div 
    onClick={toggleDarkMode} 
    className="cursor-pointer select-none h-8 w-16 mb-5 rounded-full shadow-md ring-2 ring-gray-200 dark:ring-gray-400  bg-gradient-to-tr from-white to-gray-100 dark:from-gray-200 dark:to-gray-400"
  >
    <div className={`h-8 w-8 p-1 transition-all duration-150 ease-in-out dark:ml-8`}>
      <div className="h-full rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 dark:from-blue-400 dark:via-purple-600 dark:to-gray-600" />
    </div>
  </div>
}

export default DarkSwitch
