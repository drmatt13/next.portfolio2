import { useState, useEffect, useRef, useContext } from 'react'

// components
// import Navbar from './Navbar'
import Modal from './Modal'
import Navbar2 from './Navbar2'

// context
import _appContext from '../context/_appContext'

const AppLayout = ({ children }) => {

  const { darkMode } = useContext(_appContext),
        [modal, setModal] = useState(),
        [nav, setNav] = useState()
        // [height, setHeight] = useState('100%'),
        // containerRef = useRef()

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
    setNav(false)
  }

  // useEffect(() => {
    // containerRef.current.addEventListener("scroll", () => {
      // setHeight(`${containerRef.current.scrollHeight}`)
    // })
  // }, [])

  return <>
    <style jsx>{`
      .dark {
        background: #404149;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #232526, #30313a);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #232526, #30313a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background-color: black;
      }
      .light {
        background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #c3e1ff 0%, #e5e1ff 100%);
        background-color: white;
      }
      .bg2 {
        background: url(/images/home/background-blueflex.png);
        background-size: cover;
      }
      .bg3 { background: url(/images/home/background-fixed-rb.png) right bottom no-repeat }
      .bg4 { background: url(/images/home/background-fixed-tl.png) no-repeat }

    `}</style>
    <div className={`${darkMode ? "dark" : "light"}`}>
    
      <div className="relative h-screen overflow-y-hidden">
        <Navbar2 nav={nav} setNav={setNav} modal={modal} setModal={setModal} toggleModal={toggleModal} />
        <div className="bg2 absolute top-0 left-0 h-full w-full" />
        <div className="bg3 absolute top-0 left-0 h-full w-full" />
        <div className="bg4 absolute top-0 left-0 h-full w-full" />
        <div 
          onClick={() => {setNav(false)}}
          className="absolute pt-28 top-0 h-screen w-full overflow-y-auto"
        >
          { children }
        </div>
      </div>
    </div>
    {modal && <Modal modal={modal} toggleModal={()=>toggleModal(null)} />}
    {/* <Navbar /> */}
  </>
}

export default AppLayout
