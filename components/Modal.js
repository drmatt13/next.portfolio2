import { useContext } from 'react'
import dynamic from "next/dynamic"

// context
import _appContext from '../context/_appContext'

// dynamic components
const DynamicAppModal = dynamic(() => import('./modals/apps')),
      DynamicNoteModal = dynamic(() => import('./modals/notes')),
      DynamicContactModal = dynamic(() => import('./modals/contact')),
      DynamicAboutModal = dynamic(() => import('./modals/about')),
      DynamicSettingsModal = dynamic(() => import('./modals/settings'))

const Modal = ({ modal, toggleModal }) => {

  const { darkMode } = useContext(_appContext)

  return <>
    <style jsx>{`
      .modal {
        position: relative;
        height: 65vh;
        max-height: 500px;
        min-width: 300px;
        width: 60vw;
        max-width: 800px;
        padding: 45px 10px 20px 20px;
      }
    `}</style>
    <div className="animate-fade-in absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
      <div className="absolute bg-black bg-opacity-25 h-screen w-screen" onClick={()=>toggleModal(null)} />
      <div className="modal rounded-2xl shadow-lg bg-gray-300 dark:bg-gray-700 bg-opacity-95 dark:bg-opacity-90 transition-colors">
        <div 
          className="absolute top-3 right-3 h-6 w-6 flex justify-center items-center rounded-full bg-gray-200 bg-opacity-80 hover:bg-red-400 hover:cursor-pointer transition-colors duration-150 ease-out"
          onClick={()=>toggleModal(null)}
        >
          <i className="fas fa-times"></i>
        </div>
        {modal === 'apps' && <DynamicAppModal toggleModal={toggleModal} />}
        {modal === 'notes' && <DynamicNoteModal toggleModal={toggleModal} />}
        {modal === 'contact' && <DynamicContactModal />}
        {modal === 'about' && <DynamicAboutModal />}
        {modal === 'settings' && <DynamicSettingsModal />}
      </div>
    </div>
  </>
}

export default Modal
