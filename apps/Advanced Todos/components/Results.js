import { useEffect, useContext, useRef } from "react";

// context
import _appContext from "../../../context/_appContext";

// styles
import styles from "../styles/Results.module.scss";

const Results = ({ dataPoints }) => {
  const canvasRef = useRef(),
    canvasContainerRef = useRef(),
    { darkMode } = useContext(_appContext);

  useEffect(() => {
    canvasRef.current.width = canvasContainerRef.current.clientWidth;
    canvasRef.current.height = canvasContainerRef.current.clientHeight;
    const ctx = canvasRef.current.getContext("2d");
    const { width, height } = canvasRef.current;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, 0);
    ctx.stroke();
  }, [dataPoints]);

  return (
    <>
      <div
        className={`${styles.results_container} ${
          darkMode ? styles.dark : styles.light
        } flex flex-col overflow-hidden rounded-t-2xl`}
        style={{
          height: "11em",
        }}
      >
        <div className="dark:text-white bg-white dark:bg-gray-700 border-b border-gray-200 dark:dark:border-gray-600">
          _
        </div>
        <div ref={canvasContainerRef} className="flex-1 flex">
          <canvas ref={canvasRef} className="" />
        </div>
      </div>
    </>
  );
};

export default Results;
