import { useContext } from 'react'
import Head from 'next/head'
import styles from './App.module.scss'

// context
import _appContext from "../../context/_appContext"

const App = () => {

  const { darkMode } = useContext(_appContext)

  return <>
    <Head>
      <title>3D Layered Image</title>
    </Head>
    <style jsx>{`

      img {
        content:url(${darkMode ? 
          `"/images/5cv4vkilh4201.jpg"` 
          : 
          `"/images/7409616a77e3ce87355ffb16e48709cc.png"`
        });
      }
    `}</style>
    <div className={styles.body}>
      <div className={styles.image_container}>
        <img />
        <img />
        <img />
        <img />
        <img />
      </div>
    </div>
  </>
}

export default App
