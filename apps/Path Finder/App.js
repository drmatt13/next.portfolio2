import React, { useState, useEffect, useRef, useCallback } from 'react';
import Grid from './components/Grid';
import Bloom from './components/Bloom';

// css
// import './App.css';

const randomNum = (max) => {
  return Math.floor(Math.random() * max);
}

function App() {

  const columnsRef = useRef();
  const rowsRef = useRef();
  const startRef = useRef();

  const [columns, setColumns] = useState(25);
  const [rows, setRows] = useState(25);
  const [startNode, setStartNode] = useState([0,0]);
  const [endNode, setEndNode] = useState([0,1]);
  const [seed, setSeed] = useState('20350001');

  const [drawMode, setDrawMode] = useState(0);
  const [cornerCases, setCornerCases] = useState(false);
  const [run, setRun] = useState(false);

  const randomizeStartEndNodes = useCallback(() => {
    
    const startNode = [randomNum(columns), randomNum(rows)];
    // const startNode = [0, 5];

    let endNode = startNode;

    while (startNode === endNode) endNode = [randomNum(columns), randomNum(rows)];
    // while (startNode === endNode) endNode = [9, 7];

    setStartNode(startNode);
    setEndNode(endNode);
  }, [columns, rows]);

  const generateSeed = useCallback(() => {
    return `${columns}${rows}${startNode[0]}${startNode[1]}${endNode[0]}${endNode[1]}`;
  }, [columns, endNode, rows, startNode]);

  const reset = useCallback(() => {
    setColumns(columnsRef.current.value);
    setRows(rowsRef.current.value);
    setRun(false);
    randomizeStartEndNodes();
    startRef.current.classList.remove("PATH__btn-selected");
  }, [randomizeStartEndNodes]);

  useEffect(() => {
    setSeed(generateSeed());
    console.log(startNode);
  }, [startNode, endNode, generateSeed]);

  useEffect(() => {
    columnsRef.current.value = columns;
    rowsRef.current.value = rows;
    reset();
  }, [columns, rows, reset])

  const toggleDrawingMode = e => {
    document.querySelectorAll(".PATH__option")[drawMode].classList.remove("PATH__btn-selected");
    e.target.classList.add("PATH__btn-selected");
    setDrawMode(+e.target.getAttribute("idx"));
  }

  const toggleCornerCases = e => {
    if (e.target.classList.contains("PATH__btn-selected")) {
      e.target.classList.remove("PATH__btn-selected");
      setCornerCases(false);
    }
    else {
      e.target.classList.add("PATH__btn-selected");
      setCornerCases(true);
    }
  }

  const start = () => {
    setRun(true);
    startRef.current.classList.add("PATH__btn-selected");
  }

  return (
    <div className="TEST12345">
      <Grid key={seed} columns={columns} rows={rows} startNode={startNode} endNode={endNode} drawMode={drawMode} />
      {run && <Bloom columns={columns} rows={rows} startNode={startNode} cornerCases={cornerCases} />}
      
      <div className="PATH__container">
        <div className="PATH__input-container">
          <input className="PATH__input" type="number" ref={columnsRef} name="columns"/>
          <input className="PATH__input" type="number" ref={rowsRef} name="rows"/>
        </div>
        <div onClick={reset} className="PATH__btn">reset</div>
        <div onClick={start} ref={startRef} className="PATH__btn">start</div>
      </div>
      <div className="PATH__container">
        <div onClick={toggleDrawingMode} idx="0" className="PATH__btn PATH__option PATH__btn-selected">draw</div>
        <div onClick={toggleDrawingMode} idx="1" className="PATH__btn PATH__option">erase</div>
        <div onClick={toggleCornerCases} className="PATH__btn PATH__option">Corner Cases</div>
      </div>
    </div>
  );
}

export default App;
