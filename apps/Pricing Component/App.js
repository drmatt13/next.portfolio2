import { useState } from 'react'
import Head from 'next/head'
import styles from './App.module.scss'

const App = () => {
  const [value, setValue] = useState(16)
  const [yearly, setYearly] = useState(false)
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <title>Interactive pricing component</title>
    </Head>
    <div className={styles.app}>
      <h1>Simple, traffic-based pricing</h1>
      <div className={styles.sub_header}>
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required.</p>
      </div>
      <div className={styles.card}>
        <div className={styles.pricing_container}>
          <div className={styles.pricing_header}>
            <div className={styles.pageviews}>{`${value}`}K PAGEVIEWS</div>
            <input
              onChange={(e) => {setValue(e.target.value)}}
              value={value}
              type="range" 
              step="1" 
              min="4" 
              max="1600" 
            />
            <div><span className={styles.price}>${`${(value * 6.25).toFixed(0)}`}</span>/ month</div>
          </div>
        </div>
        <div className={styles.billing_cycle_container}>
          <div>Monthly Billing</div>
          <div>
            <div className={styles.toggle_btn} onClick={() => {setYearly(!yearly)}}>
              <div className={`${styles.circle} ${yearly ? styles.yearly : ""}`} />
            </div>
          </div>
          <div>Yearly Billing <span>25% discount</span></div>
        </div>
        <div className={styles.footer}>
          <div>
            <p><i className="fas fa-check"></i> Unlimited websites</p>
            <p><i className="fas fa-check"></i> 100% data ownership</p>
            <p><i className="fas fa-check"></i> Email reports</p>
          </div>
          <div>
            <div>Start my trial</div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App
