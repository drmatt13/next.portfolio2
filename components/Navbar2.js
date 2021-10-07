import { useState, useRef, useContext } from 'react'
// import Link from './Link'

// components
// import Modal from './Modal'
// import NavButton from './NavButton'

// styles
import styles from '../styles/Navbar.module.scss'

// context
import _appContext from '../context/_appContext'

const Navbar = () => {

  const { darkMode, mobile } = useContext(_appContext),
        [state, setState] = useState(false)
        // [modal, setModal] = useState(null)

  // const containerRef = useRef()

  const toggle = () => {
    // containerRef.current.classList.add("show")
    setState(!state)
    console.log(state);
  }

  return <>
    <style jsx>{`
      // .${styles.dark} .highlight {
      //   box-shadow: 0 0 .75em rgb(70, 210, 255);
      // }
      // .${styles.light} .highlight {
      //   box-shadow: 0 0 .75em rgb(216, 139, 235);
      // }
      .select-none {

      }
      .group {
        height: 1.75em;
        width: 1.75em;
      }
      .${styles.dark} .main {
        background: linear-gradient(45deg, #0b8793e8, #946a90e8);
        box-shadow: 0 0 .75em rgb(70, 210, 255);
      }
      .${styles.light} .main {
        background-image: linear-gradient(45deg, #ffa2a280 0%, #bbc1bf80 19%, #57c6e180 42%, #b49fda80 79%, #7ac5d880 100%);
        box-shadow: 0 0 .75em rgb(216, 139, 235);
      }
    `}</style>
    {/* {modal && <Modal modal={modal} toggleModal={()=>toggleModal(null)} />} */}
    <nav className={`${darkMode ? styles.dark : styles.light} z-50 select-none sticky top-0 flex flex-row-reverse p-10 pointer-events-none`}>
      <div className="group relative h-7 w-7">
        <div
          onClick={toggle}
          className={`main pointer-events-auto absolute rounded-sm cursor-pointer rotate-45 h-full w-full border border-gray-500 dark:border-gray-400 border-opacity-80 group-hover:scale-125 group-hover:border-opacity-100 transition ease-linear
        `}/>
        {/* <div className={`highlight pointer-events-none absolute rounded-sm cursor-pointer rotate-45 h-full w-full group-hover:border group-hover:scale-50 group-hover:border-gray-500 group-hover:border-opacity-25 transition ease-linear`}/> */}
      </div>
      <div className={`${!state ? styles.close : styles.open} top-24 absolute h-10 bg-blue-900 flex flex-col items-end text-gray-500 text-xs`}>
        <div className="transition pointer-events-auto cursor-pointer absolute border border-gray-500 dark:border-gray-400 border-opacity-50 hover:text-black dark:hover:text-white hover:border-opacity-100 rounded-sm h-7 w-7 flex justify-center items-center">
          <i className="fas fa-home" />
        </div>
        <div className="transition pointer-events-auto cursor-pointer absolute border border-gray-500 dark:border-gray-400 border-opacity-50 hover:text-black dark:hover:text-white hover:border-opacity-100 rounded-sm h-7 w-7 flex justify-center items-center">
          <i className="far fa-moon" />
        </div>
        <div className="transition pointer-events-auto cursor-pointer absolute border border-gray-500 dark:border-gray-400 border-opacity-50 hover:text-black dark:hover:text-white hover:border-opacity-100 rounded-sm h-7 w-7 flex justify-center items-center">
          <i className="fas fa-laptop-code" />
        </div>
        <div className="transition pointer-events-auto cursor-pointer absolute border border-gray-500 dark:border-gray-400 border-opacity-50 hover:text-black dark:hover:text-white hover:border-opacity-100 rounded-sm h-7 w-7 flex justify-center items-center">
          <i className="fas fa-list-ul" />
        </div>
        <div className="transition pointer-events-auto cursor-pointer absolute border border-gray-500 dark:border-gray-400 border-opacity-50 hover:text-black dark:hover:text-white hover:border-opacity-100 rounded-sm h-7 w-7 flex justify-center items-center">
          <i className="fas fa-address-card" />
        </div>
        <div className="transition pointer-events-auto cursor-pointer absolute border border-gray-500 dark:border-gray-400 border-opacity-50 hover:text-black dark:hover:text-white hover:border-opacity-100 rounded-sm h-7 w-7 flex justify-center items-center">
          <i className="fas fa-question" />
        </div>
      </div>
    </nav>
  </>
}

export default Navbar
