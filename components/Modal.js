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
        height: 65vh;
        min-height: 400px;
        max-height: 500px;
        min-width: 300px;
        width: 60vw;
        max-width: 800px;
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
          background-color: ${darkMode ? "#fff8" : "#0004"}
        }
        .modal > ::-webkit-scrollbar-track {
          background: ${darkMode ? "#fff4" : "#0002"};
          border-radius: 6.25px;
          object-fit: fill;
        }
        .modal > ::-webkit-scrollbar-corner {
          background-color: rgba(0, 0, 0, 0)
        }
        @media only screen and (max-width: 640px) {
          .modal > ::-webkit-scrollbar {
            width: 6.25px;
            height: 6.25px;
          }
          .modal > ::-webkit-scrollbar-thumb {
            border-radius: 3.125px
          }
          .modal > ::-webkit-scrollbar-track {
            border-radius: 3.125px
          }
        }
        .modal * ::-webkit-scrollbar {
          width: 6.25px;
          height: 6.25px;
        }
        .modal * ::-webkit-scrollbar-thumb {
          background-color: ${darkMode ? "#bbb" : "#0002"};
          border-radius: 3.125px;
        }
        .modal * ::-webkit-scrollbar-thumb:hover {
          background-color: ${darkMode ? "#fffa" : "#0004"};
        }
        .modal * ::-webkit-scrollbar-track {
          background: ${darkMode ? "#0004" : "#0002"};
          border-radius: 6.25px;
          object-fit: fill;
        }
        .modal * ::-webkit-scrollbar-corner {
          background-color: rgba(0, 0, 0, 0)
        }
      `}
      @media only screen and (max-width: 768px) {
        .modal { width: 75vw }
      }
      @media only screen and (max-width: 640px) {
        .modal { width: 92.5vw }
      }
      @media only screen and (max-height: 441px) {
        .modal { min-height: 90% }
      }
      .tab {
        height: clamp(2em, 5vh, 2.5em);
        margin-right: 1px;
        max-width: 25%;
        width: 100px;
      }
      .selected {
        color: white;
        background: #944a90;
        background: -webkit-linear-gradient(to right, #0b879380, #944a9080);
        background: linear-gradient(to right, #0b879380, #944a9080);
      }
      .mx-2 {
        height: clamp(1.25em, 3.5vh, 1.5em);
        width: clamp(1.25em, 3.5vh, 1.5em);
      }
      i {
        font-size: clamp(.75em, 2vh, 1em);
      }
    `}</style>
    <div className="animate-fade-in absolute overflow-x-hidden top-0 left-0 h-screen w-full flex justify-center items-center">
      <div 
        onClick={()=>toggleModal(null)}
        className="absolute bg-black bg-opacity-25 h-screen w-screen"
      />
      <div className="modal relative overflow-y-hidden flex flex-col rounded-2xl shadow-lg bg-gray-300 dark:bg-gray-700 bg-opacity-95 dark:bg-opacity-90 transition-colors">
        <div className="select-none flex-shrink-0 bg-gray-500 bg-opacity-20 w-full flex items-center">
          <div className="flex-1 flex h-full overflow-y-hidden text-xs xs:text-sm sm:text-base">
            {["apps", "notes", "contact", "about"].map((m, key) => (
              <div
                key={key}
                onClick={()=>toggleModal(m)}
                className={`
                  ${modal === m ? "selected" : ""}
                  tab 
                  flex 
                  justify-center 
                  items-center 
                  h-full
                bg-white 
                  bg-opacity-10 
                  hover:bg-opacity-30 
                  cursor-pointer
                  transition-all
                `}
              >
                {m}
              </div>
            ))}
          </div>
          <div 
            onClick={()=>toggleModal(null)}
            className="mx-2 flex justify-center items-center rounded-full bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-black bg-opacity-80 hover:bg-red-500 dark:hover:bg-red-500 hover:cursor-pointer transition-colors duration-150 ease-out"
          >
            <i className="fas fa-times flex justify-center items-center" />
          </div>
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
