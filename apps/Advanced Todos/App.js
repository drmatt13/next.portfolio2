import { useState, useEffect } from "react";
import Head from "next/head";

// styles
import styles from "./styles/App.module.scss";

// components
import Calander from "./components/Calander";
import Results from "./components/Results";
import Transactions from "./components/Transactions";
import Todos from "./components/Todos";
import Modal from "./components/Modal";

const App = () => {
  //  {
  //    modal: "new" || "edit",
  //    type: "transaction" || "todo",
  //    data: { amount, start, stop, frequency }
  //  }

  const [modal, setModal] = useState({}),
    //  {
    //    name: {
    //      amount: 500,
    //      start: "yyyy-mm-dd",
    //      stop: "yyyy-mm-dd",
    //      frequency: "weekly" || "biweekly" || "monthly" || "yearly",
    //      description: "string",
    //    }
    //  }
    [transactions, setTransactions] = useState({}),
    [todos, setTodos] = useState({}),
    // [[5, 6, 10], [1, 2, 3], [4, 5, 6]]
    [dataPoints, setDataPoints] = useState([]);

  // populate state from local storage
  useEffect(() => {
    const x1 = JSON.parse(localStorage.getItem("transactions")),
      x2 = JSON.parse(localStorage.getItem("todos"));
    if (x1) setTransactions(x1);
    if (x2) setTodos(x2);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [transactions, todos]);

  return (
    <>
      <Head>
        <title>Advanced Todos</title>
      </Head>
      <div className={`${styles.app} animate-fade-in flex justify-center`}>
        <div className={`${styles.vertical_container} flex flex-col md:hidden`}>
          <Results transactions={transactions} />
          <div className={styles.spacer} />
        </div>
        <div className={styles.left_container}>
          <Calander
            transactions={transactions}
            todos={todos}
            setModal={setModal}
            dataPoints={dataPoints}
            setDataPoints={setDataPoints}
          />
          <div className={styles.spacer} />
          <Transactions
            transactions={transactions}
            setTransactions={setTransactions}
            setModal={setModal}
          />
        </div>
        <div className={`${styles.right_container} hidden md:flex flex-col`}>
          <Results dataPoints={dataPoints} />
          <div className={styles.spacer} />
          <Todos todos={todos} setTodos={setTodos} setModal={setModal} />
        </div>
        <div className={`${styles.vertical_container} flex flex-col md:hidden`}>
          <div className={styles.spacer} />
          <Todos todos={todos} setTodos={setTodos} setModal={setModal} />
        </div>
        {modal.modal && (
          <Modal
            setModal={setModal}
            modal={modal.modal}
            type={modal.type}
            data={modal.data}
            setTransactions={setTransactions}
            setTodos={setTodos}
          />
        )}
      </div>
    </>
  );
};

export default App;
