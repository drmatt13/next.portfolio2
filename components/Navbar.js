import { useState, useContext } from 'react'
import Link from './Link'

// components
import Modal from './Modal'
import NavButton from './NavButton'
import ThemeButton from './ThemeButton'

// context
import _appContext from '../context/_appContext'

const Navbar = () => {

  const { darkMode, mobile } = useContext(_appContext),
        [modal, setModal] = useState(null)

  const toggleModal = x => {
    if (modal) {
      if (modal === x) {
        setModal(null)
        return null
      }
    }
    if (!x) {
      setModal(null)
      return null
    }
    setModal(x)
  }

  return <>
    <style jsx>{`
      nav {
        width: 425px;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
      }
      .light {
        background-image: linear-gradient(to right, #ffa2a2e8 0%, #bbc1bfe8 19%, #57c6e1e8 42%, #b49fdae8 79%, #7ac5d8e8 100%);
      }
      .dark {
        background: #944a90;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #0b8793e8, #944a90e8);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #0b8793e8, #944a90e8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
    `}</style>
    {modal && <Modal modal={modal} toggleModal={()=>toggleModal(null)} />}
    <div className="absolute w-full bottom-0 flex justify-center select-none">
      <nav className={`${darkMode ? "dark" : "light"} flex shadow-2xl justify-center text-2xl`} >
        <Link href={`/`} toggleModal={toggleModal}>
          <NavButton icon="fas fa-home" onClick={toggleModal} />
        </Link>
        <ThemeButton />
        <NavButton icon="fas fa-laptop-code" onClick={()=>toggleModal("apps")} active={modal==="apps"?true:false} />
        <NavButton icon="fas fa-list-ul" onClick={()=>toggleModal("notes")} active={modal==="notes"?true:false} />
        <NavButton icon="far fa-address-card" onClick={()=>toggleModal("contact")} active={modal==="contact"?true:false} />
        <NavButton icon="fas fa-question" onClick={()=>toggleModal("about")} active={modal==="about"?true:false} />
      </nav>
    </div>
  </>
}

export default Navbar
