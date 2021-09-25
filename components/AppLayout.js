import { useContext } from 'react'

// components
import Navbar from './Navbar'

// context
import _appContext from '../context/_appContext'

const AppLayout = ({ children }) => {

  const { darkMode } = useContext(_appContext)

  return <>
    <style jsx>{`
      .dark {
        background: #404149;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #232526, #30313a);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #232526, #30313a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      .light {
        background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #c3e1ff 0%, #e5e1ff 100%);
      }
    `}</style>
    <div className={`${darkMode ? "dark" : "light"} h-screen flex flex-col dark:bg-gray-800`}>
      <div className="relative flex-1 overflow-y-auto">
        { children }
      </div>
      <Navbar />
    </div>
  </>
}

export default AppLayout
