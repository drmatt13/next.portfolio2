import { useState, useEffect, useContext, useRef } from "react";

// context
import _appContext from "../../../context/_appContext";

// styles
import styles from "../styles/Results.module.scss";

const Results = ({
  dataPoints,
  todos,
  setTodos,
  transactions,
  setTransactions,
}) => {
  const canvasRef = useRef(),
    canvasContainerRef = useRef(),
    [income, setIncome] = useState(0),
    [expenses, setExpenses] = useState(0),
    { darkMode } = useContext(_appContext);

  const importData = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.click();
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const data = JSON.parse(reader.result);
        if (data.todos) setTodos(data.todos);
        if (data.transactions) setTransactions(data.transactions);
      };
      reader.readAsText(file);
    };
  };

  const exportData = () => {
    const json = JSON.stringify({ todos, transactions }),
      blob = new Blob([json], { type: "application/json" }),
      url = URL.createObjectURL(blob),
      link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", "advanced-todos.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const paintCanvas = (ctx, dataPoints, range) => {
    const income = 0,
      expenses = 0;

    const width = canvasContainerRef.current.offsetWidth,
      height = canvasContainerRef.current.offsetHeight;
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    if (width === 0 || height === 0) return;

    ctx.clearRect(0, 0, width, height);

    const dx = width / dataPoints.length;
    const limit = height / 1.25;
    const max = Math.max(...range.map((a) => Math.abs(a)));
    const scale = limit / max;

    let greenLine = height - height / 10,
      redLine = height - height / 10;

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
      ctx.strokeStyle = "#80808080";
      ctx.beginPath();
      ctx.moveTo((i + 0.5) * dx, 0);
      ctx.lineTo((i + 0.5) * dx, height);
      ctx.stroke();

      ctx.lineWidth = 2.5;

      // move right half way
      ctx.strokeStyle = "rgb(30, 170, 60)";
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
          ctx.strokeStyle = "rgb(30, 170, 60)";
          ctx.beginPath();
          ctx.moveTo((i + 0.5) * dx, greenLine);
          greenLine -= j * scale;
          ctx.lineTo((i + 0.5) * dx, greenLine);
          ctx.stroke();
          income += j;
        }
        // move down
        if (j < 0) {
          ctx.strokeStyle = "#FF0000";
          ctx.beginPath();
          ctx.moveTo((i + 0.5) * dx, redLine);
          redLine += j * scale;
          ctx.lineTo((i + 0.5) * dx, redLine);
          ctx.stroke();
          expenses += j;
        }
      }

      // finish moving right
      ctx.strokeStyle = "rgb(30, 170, 60)";
      ctx.beginPath();
      ctx.moveTo((i + 0.5) * dx, greenLine);
      ctx.lineTo((i + 1) * dx, greenLine);
      ctx.stroke();

      ctx.strokeStyle = "#FF0000";
      ctx.beginPath();
      ctx.moveTo((i + 0.5) * dx, redLine);
      ctx.lineTo((i + 1) * dx, redLine);
      ctx.stroke();
    }
    setIncome(income);
    setExpenses(expenses);
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
        <div className="flex justify-evenly items-center text-sm dark:text-white bg-white dark:bg-gray-700 border-b border-gray-200 dark:dark:border-gray-600">
          <div className="truncate py-0.5 h-full flex items-center pr-2 pl-3 flex-1 text-green-800 dark:text-green-400">
            +<span className="pl-0.5">${income}</span>
          </div>
          <div className="truncate py-0.5 h-full flex items-center px-2 flex-1 border-l border-gray-500 text-red-700 dark:text-red-500">
            -<span className="pl-0.5">${Math.abs(expenses)}</span>
          </div>
          <div
            onClick={importData}
            className="truncate py-0.5 h-full flex items-center px-2 border-l border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer "
          >
            import data
          </div>
          <div
            onClick={exportData}
            className="truncate py-0.5 h-full flex items-center pl-2 pr-3 border-l border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer "
          >
            export data
          </div>
        </div>
        <div ref={canvasContainerRef} className="flex-1 flex">
          <canvas ref={canvasRef} className="" />
        </div>
      </div>
    </>
  );
};

export default Results;
