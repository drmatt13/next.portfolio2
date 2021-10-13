import { useEffect, useContext, useRef } from 'react'

// context
import _appContext from '../context/_appContext'

// styles
import styles from '../styles/NavButton.module.scss'

const NavButton2 = ({ className, mode, onClick }) => {

  const { darkMode, mobile } = useContext(_appContext),
        i = useRef()

  // only applies to darkMode toggle btn
  useEffect(() => {
    if (mode !== undefined) {
      if (!mobile) {
        i.current.classList.add(styles.i)
        i.current.classList.add(styles.alt)
      } else {
        i.current.classList.remove(styles.i)
        i.current.classList.remove(styles.alt)
      }
    }
  }, [mode])

  return <>
    <div className={`
      ${darkMode ? styles.dark : styles.light}
      transition
      ease-linear
      pointer-events-auto
      cursor-pointer 
      absolute
      h-full 
      w-full
      rounded-full
    `}>
      <i
        ref={i}
        onClick={onClick}
        onTouchStart={e => {
          e.target.classList.add(styles.i)
          if (mode !== undefined) e.target.classList.add(styles.alt)
        }}
        onTouchEnd={e => {
          e.target.classList.remove(styles.i)
          e.target.classList.remove(styles.alt)
        }}
        className={`
          ${styles.i}
          ${className} 
          h-full 
          w-full 
          flex 
          justify-center 
          items-center 
          text-md
          rounded-full
          transition-all
          ease-linear
          border
        border-white
          border-opacity-5
        `} 
      />
    </div>
  </>
}

export default NavButton2