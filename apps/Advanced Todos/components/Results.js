import { useEffect, useContext, useRef } from "react";

// context
import _appContext from "../../../context/_appContext";

// styles
import styles from "../styles/Results.module.scss";

const Results = ({ dataPoints }) => {
  const canvasRef = useRef(),
    canvasContainerRef = useRef(),
    { darkMode } = useContext(_appContext);

  const paintCanvas = (ctx, dataPoints, range) => {
    const width = canvasContainerRef.current.offsetWidth,
      height = canvasContainerRef.current.offsetHeight;
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    if (width === 0 || height === 0) return;

    ctx.clearRect(0, 0, width, height);

    const dx = width / dataPoints.length;
    const limit = height / 2.5;
    const max = Math.max(...range.map((a) => Math.abs(a)));
    const scale = limit / max;

    let greenLine = height / 2 - 1,
      redLine = greenLine + 2;

    ctx.lineWidth = 0.5;

    // draw grid
    ctx.strokeStyle = "#80808080";
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, height / 10);
    ctx.lineTo(width, height / 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, height / 3.25);
    ctx.lineTo(width, height / 3.25);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, height - height / 10);
    ctx.lineTo(width, height - height / 10);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, height - height / 3.25);
    ctx.lineTo(width, height - height / 3.25);
    ctx.stroke();

    for (let i = 0; i < dataPoints.length; i++) {
      ctx.lineWidth = 0.5;
      // grid
      if (i !== 0) {
        ctx.strokeStyle = "#80808080";
        ctx.beginPath();
        ctx.moveTo(i * dx, 0);
        ctx.lineTo(i * dx, height);
        ctx.stroke();
      }

      ctx.lineWidth = 2.5;

      // move right half way
      ctx.strokeStyle = "rgb(45, 175, 73)";
      ctx.beginPath();
      ctx.moveTo(i * dx, greenLine);
      ctx.lineTo((i + 0.5) * dx, greenLine);
      ctx.stroke();

      ctx.strokeStyle = "#FF0000";
      ctx.beginPath();
      ctx.moveTo(i * dx, redLine);
      ctx.lineTo((i + 0.5) * dx, redLine);
      ctx.stroke();

      for (let j of dataPoints[i]) {
        // move up
        if (j > 0) {
          ctx.strokeStyle = "rgb(45, 175, 73)";
          ctx.beginPath();
          ctx.moveTo((i + 0.5) * dx, greenLine);
          greenLine -= j * scale;
          ctx.lineTo((i + 0.5) * dx, greenLine);
          ctx.stroke();
        }
        // move down
        if (j < 0) {
          ctx.strokeStyle = "#FF0000";
          ctx.beginPath();
          ctx.moveTo((i + 0.5) * dx, redLine);
          redLine -= j * scale;
          ctx.lineTo((i + 0.5) * dx, redLine);
          ctx.stroke();
        }
      }

      // finish moving right
      ctx.strokeStyle = "rgb(45, 175, 73)";
      ctx.beginPath();
      ctx.moveTo((i + 0.5) * dx, greenLine);
      ctx.lineTo((i + 1) * dx, greenLine);
      ctx.stroke();

      ctx.strokeStyle = "#FF0000";
      ctx.beginPath();
      ctx.moveTo((i + 0.5) * dx, redLine);
      ctx.lineTo((i + 1) * dx, redLine);
      ctx.stroke();

      // ctx.strokeStyle = "rgb(45, 175, 73)";
      // ctx.beginPath();
      // ctx.moveTo(i * dx, greenLine);
      // ctx.lineTo((i + 1) * dx, greenLine);
      // ctx.stroke();

      // ctx.strokeStyle = "#FF0000";
      // ctx.beginPath();
      // ctx.moveTo(i * dx, redLine);
      // ctx.lineTo((i + 1) * dx, height - limit);
      // ctx.stroke();
    }

    // ctx.beginPath();
    // ctx.moveTo(0, height / 2);
    // ctx.lineTo(width, height);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(0, height / 2);
    // ctx.lineTo(width, 0);
    // ctx.stroke();

    // requestAnimationFrame(paintCanvas.bind(null, ctx, dataPoints));
  };

  const getRange = (arrays) => {
    const range = [0, 0];
    if (!arrays) return range;
    for (let array of arrays) {
      for (let value of array) {
        if (value > 0) range[0] += value;
        else range[1] += value;
      }
    }
    return range;
  };

  useEffect(() => {
    if (dataPoints.length === 0) return;
    const handleReize = () => {
      paintCanvas(
        canvasRef.current.getContext("2d"),
        dataPoints,
        getRange(dataPoints)
      );
    };
    window.addEventListener("resize", handleReize);
    handleReize();
    return () => {
      window.removeEventListener("resize", handleReize);
    };
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
          &nbsp;
        </div>
        <div ref={canvasContainerRef} className="flex-1 flex">
          <canvas ref={canvasRef} className="" />
        </div>
      </div>
    </>
  );
};

export default Results;
