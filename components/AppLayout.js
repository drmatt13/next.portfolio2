import { useState, useContext } from "react";

// components
import Modal from "./Modal";
import Navbar from "./Navbar";

// context
import _appContext from "../context/_appContext";

const AppLayout = ({ children }) => {
  
  const { mobile, modal, buttons, setButtons, darkMode } = useContext(_appContext)

  return (
    <>
      <style jsx>{`
        .dark {
          background: #404149; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #232526,
            #30313a
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #232526,
            #30313a
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          background-color: black;
        }
        .light {
          background-color: #8ec5fc;
          background-image: linear-gradient(62deg, #c3e1ff 0%, #e5e1ff 100%);
          background-color: white;
        }
        .bg2 {
          background: url(/images/layout/background-blueflex.webp);
          background-size: cover;
        }
        .bg3 {
          background: url(/images/layout/${darkMode
              ? "background-fixed-rb.webp"
              : "imageonline-co-hueshifted.webp"})
            right bottom no-repeat;
        }
        .bg4 {
          background: url(/images/layout/background-fixed-tl.png) no-repeat;
        }
      `}</style>
      <div className={`${darkMode ? "dark" : "light"} flex justify-center`}>
        <div className="relative h-screen overflow-y-hidden w-full max-w-[240rem]">
          <Navbar />
          <div className="bg2 absolute top-0 left-0 h-full w-full" />
          <div className="bg3 absolute top-0 left-0 h-full w-full" />
          <div className="bg4 absolute top-0 left-0 h-full w-full" />
          <div
            onClick={() => {
              buttons !== undefined ? setButtons(false) : "";
            }}
            className="absolute pt-28 top-0 h-full w-full overflow-y-auto"
          >
            {children}
          </div>
        </div>
      </div>
      {modal && <Modal />}
    </>
  );
};

export default AppLayout;
