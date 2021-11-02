import { useState, useEffect } from 'react'
import Head from 'next/head'

// styles
import styles from './styles/App.module.scss'

// components
import Calander from './components/Calander'
import Results from './components/Results'
import Transactions from './components/Transactions'
import Todos from './components/Todos'
import Modal from './components/Modal'

const App = () => {

  const [modal, setModal] = useState()

  // populate from local storage - recurring: [weekly, biweekly, monthly, yearly]
  const [transactions, setTransactions] = useState([
    // {
    //   "name": "name",
    //   "amount": 500,
    //   "start": "10/1/2021",
    //   "stop": "11/10/2021",
    //   "recurring": "biweekly"
    // }
  ])

  const [todos, setTodos] = useState([
    // {
    //   "name": "todo",
    //   "todo": "todo",
    //   "start": "8/21/2021",
    //   "stop": "12/4/2021",
    //   "recurring": "monthly"
    // }
  ])

  // populate state from local storage
  useEffect(() => {
    const x1 = JSON.parse(localStorage.getItem('transactions')),
          x2 = JSON.parse(localStorage.getItem('todos'))
    if (x1) setTransactions(x1)
    if (x2) setTodos(x2)
  }, [])

  return <>
    <Head>
    <title>Advanced Todos</title>
    </Head>
    <div className={`${styles.app} animate-fade-in flex justify-center`}>
      <div className={`${styles.vertical_container} flex flex-col md:hidden`}>
        <Results transactions={transactions} />
        <div className={styles.spacer} />
      </div>
      <div className={styles.left_container}>
        <Calander transactions={transactions} todos={todos} setModal={setModal} />
        <div className={styles.spacer} />
        <Transactions transactions={transactions} setTransactions={setTransactions} setModal={setModal} />
      </div>
      <div className={`${styles.right_container} hidden md:flex flex-col`}> 
        <Results transactions={transactions} />
        <div className={styles.spacer} />
        <Todos todos={todos} setTodos={setTodos} setModal={setModal} />
      </div>
      <div className={`${styles.vertical_container} flex flex-col md:hidden`}>
        <div className={styles.spacer} />
        <Todos todos={todos} setTodos={setTodos} setModal={setModal} />
      </div>
      {modal && <Modal 
        modal={modal} 
        setModal={setModal} 
        transactions={transactions} 
        setTransactions={setTransactions} 
        setTodos={setTodos} 
        todos={todos} 
      />}
    </div>
  </>
}

export default App
