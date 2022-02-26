import { useState, useContext } from 'react'
import dynamic from "next/dynamic"

// components
import Loading from "./Animation1";

// context
import _appContext from '../context/_appContext'
import modalContext from '../context/modalContext'

// dynamic components
const DynamicAppModal = dynamic(() => import('./modals/apps')),
      DynamicNoteModal = dynamic(() => import('./modals/notes')),
      DynamicEditFileModal = dynamic(() => import('./modals/editFile')),
      DynamicContactModal = dynamic(() => import('./modals/contact')),
      DynamicAboutModal = dynamic(() => import('./modals/about'));

const Modal = () => {

  const { darkMode, mobile, modal, toggleModal } = useContext(_appContext);
  const [processing, setProcessing] = useState(false);

  return <>
    <style global="true">{`
      .modal {
        min-height: 400px;
        height: 65vh;
        max-height: 500px;
        width: clamp(300px, 60vw, 800px);
      }
      ${!mobile && `
        .modal > ::-webkit-scrollbar {
          width: 9.375px;
          height: 9.375px;
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
      @media only screen and (max-width: 1023px) {
        .modal { width: clamp(0px, 92.5vw, 500px) }
      }
      ${mobile ? `
        @media only screen and (max-width: 641px) {
          .modal { width: clamp(92.5vw, 92.5vw, 92.5vw) }
        }` : ``
      }
      @media only screen and (max-height: 441px) {
        .modal { min-height: 90% }
      }
      .tab {
        height: clamp(2em, 5vh, 2.5em);
        max-width: 25%;
        width: 100px;
      }
      @media only screen and (max-width: 500px) {
        .tab { width: 25% }
      }
      .mr-1px {
        margin-right: 1px
      }
      .selected {
        color: white;
        background: #944a90;
        background: -webkit-linear-gradient(to right, #0b879380, #944a9080);
        background: linear-gradient(to right, #0b879380, #944a9080);
      }
    `}</style>
    <div className="animate-fade-in absolute overflow-x-hidden top-0 left-0 h-screen w-full flex justify-center items-center">
      <div 
        onClick={()=>toggleModal(null)}
        className="absolute bg-black bg-opacity-25 h-screen w-screen"
      />
      <div className="modal relative overflow-y-hidden flex flex-col rounded-2xl shadow-lg bg-gray-300 dark:bg-gray-700 bg-opacity-95 dark:bg-opacity-90 transition-colors">
        {["apps", "notes", "contact", "about"].includes(modal.name) && <>
          <div className="select-none flex-shrink-0 bg-gray-500 bg-opacity-25 w-full flex items-center animate-fade-in">
            <div className="flex-1 flex h-full overflow-y-hidden text-xs xs:text-sm sm:text-base">
              {["apps", "notes", "contact", "about"].map((tab, key) => (
                <div
                  key={key}
                  onClick={()=>toggleModal({ name: tab })}
                  className={`
                    ${modal.name === tab ? "selected" : ""}
                    ${tab !== "about" ? "mr-1px" : ""}
                    tab 
                    flex 
                    h-full
                    justify-center 
                    items-center 
                    bg-opacity-25 
                    bg-gray-500 
                    hover:bg-white
                    hover:text-white
                    hover:bg-opacity-25
                    hover:drop-shadow-2xl
                    cursor-pointer
                    transition-all
                  `}
                >
                  { tab }
                </div>
              ))}
            </div>
          </div>
        </>}
        {processing && <>
          <div className="fixed top-0 left-0 z-50" />
          <div className="absolute h-full w-full flex justify-center items-center bg-black/50 z-10 animate-fade-in">
            <Loading />
          </div>
        </>}
        <div className="m-2.5 flex-1 overflow-y-auto">
          <modalContext.Provider 
            value={{
              // processing, 
              setProcessing
            }}
          >
            {modal.name === 'apps' && <DynamicAppModal />}
            {modal.name === 'notes' && <DynamicNoteModal />}
            {modal.name === 'editFile' && <DynamicEditFileModal />}
            {modal.name === 'contact' && <DynamicContactModal />}
            {modal.name === 'about' && <DynamicAboutModal />}
          </modalContext.Provider>
        </div>
      </div>
    </div>
  </>
}

export default Modal
