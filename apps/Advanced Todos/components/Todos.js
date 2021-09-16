import { useEffect, useRef } from 'react'
import styles from '../styles/Transactions.module.scss'

const Todos = ({ todos, setTodos, setModal }) => {

  const transactionName = useRef()
  const transactionValue = useRef()

  const onSubmit = e => {
    e.preventDefault()
    transactionName.current.value = ""
    transactionValue.current.value = ""
  }

  useEffect(() => {
    // console.log(todos);
  }, [])

  return <>
    <div className={styles.transactions_master_container}>
      <div>

        <h3>Todos</h3>

        <div className={styles.transactions_container}>
          {todos && todos.map((todo, i) => (
            <div key={i} className={styles.transaction} onClick={() => {setModal(true)}}>
              <div className={styles.exit_btn}>x</div>
              <div className={styles.name}>{todo.name}</div>
              <div className={`${styles.color} ${styles.yellow}`} />
            </div>
          ))}
        </div>

        <div className={styles.transaction_btn} onClick={() => {setModal(true)}}>Add Transaction</div>

      </div>
    </div>
  </>
}

export default Todos
