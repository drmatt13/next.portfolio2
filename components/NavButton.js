import { useEffect, useContext, useRef } from "react";

// context
import _appContext from "../context/_appContext";

// styles
import styles from "../styles/NavButton.module.scss";

const NavButton = ({ className, mode, onClick }) => {
  const { darkMode, mobile } = useContext(_appContext),
    i = useRef();

  // only applies to darkMode toggle btn
  useEffect(() => {
    if (mode !== undefined) {
      if (!mobile) {
        i.current.classList.add(styles.i);
        i.current.classList.add(styles.alt);
      } else {
        i.current.classList.remove(styles.i);
        i.current.classList.remove(styles.alt);
      }
    }
  }, [mode]);

  return (
    <>
      <style jsx>{`
        @media (max-height: 700px) {
          .text-md {
            font-size: .75rem;
          }
        }
        @media (max-height: 600px) {
          .text-md {
            font-size: .6rem;
          }
        }
        @media (max-height: 500px) {
          .text-md {
            font-size: .5rem;
          }
        }
      `}</style>
      <div
        className={`
          ${darkMode ? styles.dark : styles.light}
          transition
          ease-linear
          pointer-events-auto
          cursor-pointer 
          absolute
          h-full 
          w-full
          rounded-full
        `}
      >
        <i
          ref={i}
          onClick={onClick}
          onTouchStart={(e) => {
            e.target.classList.add(styles.i);
            if (mode !== undefined) e.target.classList.add(styles.alt);
          }}
          onTouchEnd={(e) => {
            e.target.classList.remove(styles.i);
            e.target.classList.remove(styles.alt);
          }}
          className={`
            ${styles.i}
            ${className} 
            h-full 
            w-full 
            flex 
            justify-center 
            items-center 
            text-md
            rounded-full
            transition-all
            ease-linear
            border
          border-white
            border-opacity-5
          `}
        />
      </div>
    </>
  );
};

export default NavButton;
