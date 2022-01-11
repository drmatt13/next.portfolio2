import { useEffect, useContext, useRef } from "react";

// context
import _appContext from "../context/_appContext";

const Navbar = ({ style, option, toggleModal, modal }) => {
  const { mobile } = useContext(_appContext),
    navRef = useRef(),
    settingsRef = useRef();

  useEffect(() => {
    const adjustHeight = () => {
      const size = window.screen.height/20 > 36 
      ? 36 
      : window.screen.height/20 < 24
      ? 24
      : window.screen.height/20;
      settingsRef.current.setAttribute("style", `height: ${size}px !important; width: ${size}px !important;`);
    };
    const adjustPadding = () => {
      const size = window.screen.width/12.5 > 36 
      ? 36 
      : window.screen.width/12.5 < 24
      ? 24
      : window.screen.width/12.5;
      navRef.current.setAttribute("style", `padding-left: ${size}px !important;`);
    };
    if (mobile) {
      screen.orientation.addEventListener('change', adjustHeight)
      adjustHeight();
      adjustPadding();
      settingsRef.current.classList.add("duration-75");
      return () => {
        screen.orientation.removeEventListener('change', adjustHeight)
      }
    } else {
      return () => {}
    }
  }, [mobile]);

  const onClick = () => {
    toggleModal(modal === "editFiles" ? "notes" : option)
  }

  return (
    <>
      <style jsx>{`
        .relative {
          height: clamp(1.5em, 5vh, 2.25em);
          width: clamp(1.5em, 5vh, 2.25em);
        }
      `}</style>
      <nav
        ref={navRef}
        className="z-50 -translate-y-full h-28 sticky py-10 pl-4 xs:pl-6 sm:pl-8 lg:pl-14 flex select-none pointer-events-none animate-fade-in"
      >
        <div 
          ref={settingsRef}
          className={`${modal === "editFiles" ? "animate-fade-in" : ""} group relative flex justify-center items-center cursor-pointer pointer-events-auto`}
          onClick={onClick}
        >
          <i className={`${modal === "editFiles" ? "fas fa-angle-left" : style} text-3xl dark:text-white group-hover:scale-110 opacity-50 group-hover:opacity-100 transition-all`} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
