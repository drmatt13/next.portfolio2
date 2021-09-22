import { useContext, useRef } from 'react'

// context
import _appContext from '../context/_appContext'

const NavButton = ({ icon, onClick, active }) => {

  const { darkMode } = useContext(_appContext)

  const ref = useRef()

  const touchStart = () => {
    ref.current.classList.remove("dark:text-gray-300")
    ref.current.classList.add("dark:bg-green-300", "dark:text-black", "bg-green-300")
  }

  const touchEnd = () => {
    ref.current.classList.add("dark:text-gray-300")
    ref.current.classList.remove("dark:bg-green-300", "dark:text-black", "bg-green-300")
  }

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
      onClick={onClick} 
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
        dark:text-gray-300
        dark:bg-gray-700 
        flex 
        justify-center 
        items-center 
        hover:shadow 
        hover:cursor-pointer 
        transition-colors 
        duration-200 
        ease-out
    `}>
      <i className={icon} />
    </div>
  </>
}

export default NavButton
