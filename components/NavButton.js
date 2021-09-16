import { useContext } from 'react'

// context
import _appContext from '../context/_appContext'

const NavButton = ({ icon, onClick, active }) => {

  const { darkMode } = useContext(_appContext)

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
      onClick={onClick} 
      className={`
        ${darkMode ? "dark" : "light"}
        h-12 
        w-12 
        mx-2 
        my-2.5 
        rounded-full 
        bg-white 
        dark:bg-gray-700 
        dark:hover:bg-green-300 
        dark:text-gray-300 
        dark:hover:text-black
        hover:bg-green-300 
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
