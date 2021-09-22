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
      .${styles.body} {
        background-position: center;
        background-size: cover;
        background-image: url(
          ${darkMode ? 
            `"https://lh3.googleusercontent.com/proxy/XOhsuTNxyj3WR1ivBI-3vnCRP_3L-CzXs_vYvJ5LAiFZuH0uHcE3-JIb_8fAKBZZL6Q_24A3LSVr7aSQP158GGbJZk9U-NFXuT2A_BjuUd8M4JUg39lJtW5y-VkSj7fX=s0-d"` 
            : 
            `"https://cdn.wallpapersafari.com/42/49/XIhAQL.jpg"`
          }
        );
      }
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
