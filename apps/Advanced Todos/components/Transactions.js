import { useEffect, useRef } from 'react'
import styles from '../styles/Transactions.module.scss'

const Transactions = ({ transactions, setTransactions, setModal }) => {

  const transactionName = useRef()
  const transactionValue = useRef()

  const onSubmit = e => {
    e.preventDefault()
    transactionName.current.value = ""
    transactionValue.current.value = ""
  }

  useEffect(() => {
    // console.log(transactions);
  }, [])

  return <>
    <div className={styles.transactions_master_container}>
      <div>

        <h3>Transactions</h3>

        <div className={styles.transactions_container}>
          {transactions && transactions.map((transaction, i) => (
            <div key={i} className={styles.transaction} onClick={() => {setModal(true)}}>
              <div className={styles.exit_btn}>x</div>
              <div className={styles.name}>{transaction.name}</div>
              <div className={styles.amount}>{transaction.amount > 0 ? "" : "-"}${Math.abs(transaction.amount)}</div>
              <div className={`${styles.color} ${transaction.amount > 0 ? styles.green : styles.red}`} />
            </div>
          ))}
        </div>

        <div className={styles.transaction_btn} onClick={() => {setModal(true)}}>Add Transaction</div>

      </div>
    </div>
  </>
}

export default Transactions
