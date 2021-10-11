import { useContext } from 'react'
import { useRouter } from 'next/router'

// components
import NavButton from './NavButton2'

// styles
import styles from '../styles/Navbar.module.scss'

// context
import _appContext from '../context/_appContext'

const Navbar = ({ nav, setNav, modal, setModal, toggleModal }) => {

  const { darkMode, setDarkMode } = useContext(_appContext),
        router = useRouter()

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

  const redirectHome = async () => {
    if (router.pathname === '/')
      await router.push(`/redirect`)
    else 
      await router.push('/')
    setNav(false)
    setModal(undefined)
  }

  const toggleNav = () => {
    if (nav === undefined) setNav(true)
    else setNav(!nav)
  }

  return <>
    <style jsx>{`
      .relative {
        height: clamp(1.5em, 5vh, 2.25em);
        width: clamp(1.5em, 5vh, 2.25em);
      }
      .${styles.dark} .parent {
        box-shadow: 0 0 .75em rgb(70, 210, 255);
        border: 1px solid transparent;
        border-image: linear-gradient(to bottom right, #b827fc60 0%, #2c90fc60 25%, #b8fd3360 50%, #fec83760 75%, #fd189260 100%);
        border-image-slice: 1;
      }
      .${styles.light} .parent {
        box-shadow: 0 0 .75em rgb(216, 139, 235);
        border: 1px solid transparent;
        border-image: linear-gradient(45deg, #0b879380, #946a9080);
        border-image-slice: 1;
      }
      .${styles.dark} .child {
        background: linear-gradient(45deg, #0b8793e8, #946a90e8);
        border: none;
      }
      .${styles.light} .child {
        background-image: linear-gradient(45deg, #ffa2a2b0 0%, #bbc1bfb0 19%, #57c6e1b0 42%, #b49fdab0 79%, #7ac5d8b0 100%)
      }
    `}</style>
    <nav className={`${darkMode ? styles.dark : styles.light} z-50 sticky py-10 pr-8 xs:pr-10 sm:pr-14 lg:pr-20 flex flex-row-reverse select-none pointer-events-none`}>
      <div className="relative">
        <div
          onClick={toggleNav}
          className={`group parent pointer-events-auto absolute rounded-sm cursor-pointer rotate-45 h-full w-full border border-gray-500 dark:border-gray-600 border-opacity-80 hover:scale-125 hover:border-opacity-100 transition ease-linear
        `}>
          <div className={`child pointer-events-none absolute opacity-0 group-hover:opacity-100 rounded-sm cursor-pointer h-full w-full group-hover:border group-hover:scale-50 group-hover:border-gray-500 group-hover:border-opacity-25 transition ease-linear`}/>
        </div>
        {nav !== undefined && <div className={`${!nav ? styles.close : styles.open} absolute h-full w-full flex flex-col items-center text-xs`}>
          <NavButton className="fas fa-home" onClick={redirectHome} />
          <NavButton onClick={toggleDarkMode} className={darkMode ? `fas fa-moon text-purple-600 ${styles.moon}` : `fas fa-sun text-yellow-400 text-base ${styles.sun}`} />
          <NavButton className="fas fa-laptop-code" onClick={()=>toggleModal("apps")} />
          <NavButton className="fas fa-list-ul" onClick={()=>toggleModal("notes")} />
          <NavButton className="fas fa-address-card" onClick={()=>toggleModal("contact")} />
          <NavButton className="fas fa-music" onClick={()=>toggleModal("about")} />
        </div>}
      </div>
    </nav>
  </>
}

export default Navbar
