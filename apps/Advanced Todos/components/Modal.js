import { useState, useEffect, useContext } from "react";
import moment from "moment";

// context
import _appContext from "../../../context/_appContext";

const Modal = ({ setModal, modal, type, data, setTransactions, setTodos }) => {
  const [name, setName] = useState(""),
    [originalName, setOriginalName] = useState(""),
    [start, setStart] = useState(""),
    [stop, setStop] = useState(""),
    [frequency, setFrequency] = useState("exact date"),
    [amount, setAmount] = useState(""),
    [description, setDescription] = useState(""),
    { darkMode } = useContext(_appContext);

  const closeModal = () => setModal({});

  const addItem = () => {
    const newItem = {
      start,
      stop,
      frequency,
      amount,
      description,
    };

    if (frequency === "exact date") delete newItem[stop]; // **** fix

    if (type === "transaction")
      setTransactions((prevTransactions) => {
        if (originalName !== name) delete prevTransactions[originalName];
        return {
          ...prevTransactions,
          [name]: newItem,
        };
      });
    if (type === "todo")
      setTodos((prevTodos) => {
        if (originalName !== name) delete prevTodos[originalName];
        return {
          ...prevTodos,
          [name]: newItem,
        };
      });
    setModal({});
  };

  const deleteItem = () => {
    if (type === "transaction")
      setTransactions((prevTransactions) => {
        delete prevTransactions[originalName];
        return { ...prevTransactions };
      });
    if (type === "todo")
      setTodos((prevTodos) => {
        delete prevTodos[originalName];
        return { ...prevTodos };
      });
    setModal({});
  };

  const processStartChange = (value) => {
    if (stop) if (moment(value).isAfter(moment(stop))) setStop(value);
    setStart(value);
  };

  useEffect(() => {
    if (modal === "edit") {
      if (data.name) setName(data.name);
      if (data.name) setOriginalName(data.name);
      if (data.start) setStart(data.start);
      if (data.start && data.stop) setStop(data.stop);
      if (data.start && data.frequency) setFrequency(data.frequency);
      if (data.amount) setAmount(data.amount);
      if (data.description) setDescription(data.description);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        .todo-modal {
          height: clamp(0px, 350px, 90vh);
          width: clamp(300px, 550px, 90vw);
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
      `}</style>
      {/* ${darkMode ? 
      `::-webkit-calendar-picker-indicator {
        filter: invert(1);
      }` : ''}  */}
      <div className="fixed top-0 left-0 h-screen w-full bg-gray-600 dark:bg-black bg-opacity-25 dark:bg-opacity-50 flex justify-center items-center">
        <div
          className="absolute top-0 left-0 h-full w-full"
          onClick={closeModal}
        />
        <div className="todo-modal flex flex-col p-3 rounded-3xl bg-gray-300 dark:bg-gray-500 bg-opacity-90 dark:bg-opacity-60 animate-fade-in">
          <div className="h-7 flex justify-between">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-3 rounded-full dark:bg-black dark:text-white dark:bg-opacity-80"
              type="text"
              placeholder={`${type} name`}
            />
            <div
              onClick={closeModal}
              className="ml-2.5 h-7 w-7 bg-white dark:bg-black dark:text-gray-300 dark:hover:text-black bg-opacity-100 dark:bg-opacity-80 hover:bg-red-400 dark:hover:bg-red-500 dark:hover:bg-opacity-70 rounded-full flex justify-center items-center cursor-pointer"
            >
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="h-7 mt-2.5 flex">
            <input
              type="date"
              value={start}
              onChange={(e) => processStartChange(e.target.value)}
              className="w-2/5 px-3 rounded-full dark:bg-black dark:text-white dark:bg-opacity-80 mr-2.5"
            />
            <i
              className={`
              fas fa-arrow-right flex items-center mr-2.5 0 
              ${
                stop && frequency !== "exact date"
                  ? "text-black dark:text-gray-300"
                  : "text-gray-400 dark:text-gray-500"
              }
            `}
            />
            <input
              type="date"
              min={start}
              value={stop}
              disabled={!start || frequency === "exact date"}
              onChange={(e) => setStop(e.target.value)}
              className="w-2/5 px-3 rounded-full dark:bg-black dark:text-white dark:bg-opacity-80 mr-2.5"
            />
            {frequency === "exact date" && <div className="flex-1" />}
            {modal === "edit" && (
              <>
                <div
                  onClick={deleteItem}
                  className="px-3 w-1/5 rounded-full flex justify-center items-center text-white hover:text-black bg-red-500 hover:bg-red-400 cursor-pointer"
                >
                  delete
                </div>
              </>
            )}
          </div>
          <div className="h-7 mt-2.5 flex">
            <select
              value={frequency}
              disabled={!start}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-1/3 px-3 rounded-full dark:bg-black dark:text-white dark:bg-opacity-80 mr-2.5"
            >
              <option value="exact date">exact date</option>
              <option value="daily">daily</option>
              <option value="weekly">weekly</option>
              <option value="biweekly">biweekly</option>
              <option value="monthly">monthly</option>
            </select>
            {type === "transaction" && (
              <input
                type="number"
                value={amount}
                placeholder="$"
                onChange={(e) => setAmount(e.target.value)}
                className="w-1/6 px-3 rounded-full dark:bg-black dark:text-white dark:bg-opacity-80"
              />
            )}
          </div>
          <textarea
            value={description}
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
            className="resize-none flex-1 my-2.5 p-3 rounded-2xl bg-white dark:bg-black dark:text-white dark:bg-opacity-80"
          />
          <div
            onClick={() => {
              name &&
                frequency &&
                (amount || type === "todo") &&
                (type === "transaction" ? start : true) &&
                addItem();
            }}
            className={`
            select-none h-10 w-full flex justify-center items-center rounded-3xl text-white transition-all
            ${
              name &&
              frequency &&
              (amount || type === "todo") &&
              (type === "transaction" ? start : true)
                ? `
            bg-blue-500 dark:bg-blue-500 dark:bg-opacity-75 hover:bg-blue-400 dark:hover:bg-blue-500 cursor-pointer
            `
                : `
            bg-gray-400 dark:bg-gray-500
            `
            }
          `}
          >
            {modal === "new" ? "Add" : "Edit"}{" "}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
