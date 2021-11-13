import { useEffect, useRef, useContext } from 'react'

// context
import _appContext from '../../../context/_appContext'

// styles
import styles from '../styles/Transactions.module.scss'

const Todos = ({ todos, setTodos, setModal }) => {

  const { darkMode } = useContext(_appContext)

  const transactionName = useRef()
  const transactionValue = useRef()

  const onSubmit = e => {
    e.preventDefault()
    transactionName.current.value = ""
    transactionValue.current.value = ""
  }

  return <>
    <div className={`${styles.transactions_master_container} ${darkMode ? styles.dark : styles.light} flex-1 rounded-2xl bg-gray-100 dark:bg-gray-700 dark:text-gray-200 border dark:dark:border-gray-700`}>
      <div className="h-full flex flex-col p-2.5">
        <div className="mb-2.5 pb-2.5 border-b border-gray-300 dark:border-gray-500 truncate">Todos</div>
        <div className="flex-1 max-h-full overflow-y-auto">
        {todos && Object.keys(todos).map((name, i) => (
            <div 
              key={i} 
              onClick={() => {setModal({modal: "edit", type: "todo", data: {
                name,
                amount: todos[name].amount,
                start: todos[name].start,
                stop: todos[name].stop,
                frequency: todos[name].frequency,
                description: todos[name].description,
              } })}}
              className={`${styles.transaction} border dark:border-gray-400 dark:border-opacity-5 cursor-pointer mt-2.5 mr-2.5 flex relative rounded-xl bg-white dark:bg-gray-500 hover:shadow dark:hover:bg-gray-400 dark:hover:border-gray-600 dark:hover:text-white transition-all`} 
            >
              <div className="flex-1 p-2.5 truncate">{name}</div>
              <div className={`${styles.color} ${styles.yellow} absolute right-0 h-full w-2.5`} />
            </div>
          ))}
        </div>
        <div 
          onClick={() => {setModal({modal: "new", type: "todo", data: {} })}}
          className={`cursor-pointer select-none h-10 w-full mt-2.5 flex justify-center items-center rounded-3xl text-white bg-blue-500 dark:bg-blue-500 dark:bg-opacity-75 hover:bg-blue-400 dark:hover:bg-blue-500 transition-all`} 
        >
          Add Todo
        </div>
      </div>
    </div>
  </>
}

export default Todos
