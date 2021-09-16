import Head from 'next/head'
import styles from './App.module.scss'

const App = () => {

  return <>
    <Head>
      <title>3D Layered Image</title>
    </Head>
    <div className={styles.body}>
      <div className={styles.image_container}>
        <img src="/images/7409616a77e3ce87355ffb16e48709cc.png" />
        <img src="/images/7409616a77e3ce87355ffb16e48709cc.png" />
        <img src="/images/7409616a77e3ce87355ffb16e48709cc.png" />
        <img src="/images/7409616a77e3ce87355ffb16e48709cc.png" />
        <img src="/images/7409616a77e3ce87355ffb16e48709cc.png" />
      </div>
    </div>
  </>
}

export default App
