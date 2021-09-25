import { useContext } from 'react'
import dynamic from "next/dynamic"

// context
import _appContext from '../context/_appContext'

// dynamic components
const DynamicAppModal = dynamic(() => import('./modals/apps')),
      DynamicNoteModal = dynamic(() => import('./modals/notes')),
      DynamicContactModal = dynamic(() => import('./modals/contact')),
      DynamicAboutModal = dynamic(() => import('./modals/about'))

const Modal = ({ modal, toggleModal }) => {

  const { darkMode, mobile } = useContext(_appContext)

  return <>
    <style global="true">{`
      .modal {
        position: relative;
        height: 65vh;
        max-height: 500px;
        min-width: 300px;
        width: 60vw;
        max-width: 800px;
        padding: 45px 10px 20px 20px;
        overflow-y: hidden;
      }

      ${!mobile && `
      .modal > ::-webkit-scrollbar {
        width: 12.5px;
        height: 12.5px;
      }
      
      .modal > ::-webkit-scrollbar-thumb {
        background-color: ${darkMode ? "#fff6" : "#0002"};
        border-radius: 6.25px;
      }
      
      .modal > ::-webkit-scrollbar-thumb:hover {
        background-color: ${darkMode ? "#fff8" : "#0004"};
      }
      
      .modal > ::-webkit-scrollbar-track {
        background: ${darkMode ? "#fff4" : "#0002"};
        border-radius: 6.25px;
        object-fit: fill;
      }
      
      .modal > ::-webkit-scrollbar-corner {
        background-color: rgba(0, 0, 0, 0);
      }

      @media only screen and (max-width: 640px) {
        .modal > ::-webkit-scrollbar {
          width: 6.25px;
          height: 6.25px;
        }
        
        .modal > ::-webkit-scrollbar-thumb {
          border-radius: 3.125px;
        }
        
        .modal > ::-webkit-scrollbar-track {
          border-radius: 3.125px;
        }
      }
    `}

      @media only screen and (max-width: 768px) {
        .modal {
          width: 75vw;
        }
      }

      @media only screen and (max-width: 640px) {
        .modal {
          width: 92.5vw;
        }
      }
    `}</style>
    <div className="animate-fade-in absolute top-0 left-0 h-screen w-screen flex justify-center items-center">
      <div className="absolute bg-black bg-opacity-25 h-screen w-screen" onClick={()=>toggleModal(null)} />
      <div className="modal rounded-2xl shadow-lg bg-gray-300 dark:bg-gray-700 bg-opacity-95 dark:bg-opacity-90 transition-colors">
        <div 
          className="absolute top-3 right-3 h-6 w-6 flex justify-center items-center rounded-full bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-black bg-opacity-80 hover:bg-red-500 dark:hover:bg-red-500 hover:cursor-pointer transition-colors duration-150 ease-out"
          onClick={()=>toggleModal(null)}
        >
          <i className="fas fa-times"></i>
        </div>
        {modal === 'apps' && <DynamicAppModal toggleModal={toggleModal} />}
        {modal === 'notes' && <DynamicNoteModal toggleModal={toggleModal} />}
        {modal === 'contact' && <DynamicContactModal />}
        {modal === 'about' && <DynamicAboutModal />}
      </div>
    </div>
  </>
}

export default Modal
