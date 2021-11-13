import { useEffect, useRef, useContext } from "react";

// context
import _appContext from "../../../context/_appContext";

// styles
import styles from "../styles/Transactions.module.scss";

const Transactions = ({ transactions, setTransactions, setModal }) => {
  const { darkMode } = useContext(_appContext);

  const transactionName = useRef();
  const transactionValue = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    transactionName.current.value = "";
    transactionValue.current.value = "";
  };

  return (
    <>
      <div
        className={`${styles.transactions_master_container} ${
          darkMode ? styles.dark : styles.light
        } flex-1 rounded-2xl bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border dark:dark:border-gray-700`}
      >
        <div className="h-full flex flex-col p-2.5">
          <div className="mb-2.5 pb-2.5 border-b border-gray-300 dark:border-gray-500 truncate">
            Transactions
          </div>
          <div className="flex-1 max-h-full overflow-y-auto">
            {transactions &&
              Object.keys(transactions).map((name, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setModal({
                      modal: "edit",
                      type: "transaction",
                      data: {
                        name,
                        amount: transactions[name].amount,
                        start: transactions[name].start,
                        stop: transactions[name].stop,
                        frequency: transactions[name].frequency,
                        description: transactions[name].description,
                      },
                    });
                  }}
                  className={`${styles.transaction} border dark:border-gray-400 dark:border-opacity-5 cursor-pointer mt-2.5 mr-2.5 flex relative rounded-xl bg-white dark:bg-gray-500 hover:shadow dark:hover:bg-gray-400 dark:hover:border-gray-600 dark:hover:text-white transition-all`}
                >
                  <div className="flex-1 p-2.5 truncate">{name}</div>
                  <div className="p-2.5 mr-2.5">
                    {transactions[name].amount > 0 ? "" : "-"}$
                    {Math.abs(transactions[name].amount)}
                  </div>
                  <div
                    className={`${styles.color} ${
                      transactions[name].amount > 0 ? styles.green : styles.red
                    } absolute right-0 h-full w-2.5`}
                  />
                </div>
              ))}
          </div>
          <div
            onClick={() => {
              setModal({ modal: "new", type: "transaction", data: {} });
            }}
            className={`cursor-pointer select-none h-10 w-full mt-2.5 flex justify-center items-center rounded-3xl text-white bg-blue-500 dark:bg-blue-500 dark:bg-opacity-75 hover:bg-blue-400 dark:hover:bg-blue-500 transition-all`}
          >
            Add Transaction
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
