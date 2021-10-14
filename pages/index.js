import { useContext } from 'react'
import Image from 'next/image'
import Head from 'next/head'

// components
import MirrorIcons from '../components/MirrorIcons'

// context
import _appContext from '../context/_appContext'

// styles
import styles from '../styles/Home.module.scss'

export default function Home() {

  const { darkMode, mobile } = useContext(_appContext)

  return <>
    <style>{`
    .first {
      height: clamp(500px, calc(100vh - 14rem), 1000px)
    }
    .custom-text {
      font-family: 'IBM Plex Mono', monospace;
      color: #FFF;
      font-size: 3em;
    }
    .flex-7 {
      flex: 7;
    }
    .second {
      height: clamp(300px, 50vh, 500px)
    }
    `}</style>
    <div className="first flex">
      <div className="custom-text flex-1 flex flex-col mt-24">
        <div className="flex-7 flex items-start justify-center">
          <div>
            <div>Hi,</div>
            <div>I'm <span className={styles.rainbow_underline}><span className={`${styles.glitch}`} data-text="MATT">MATT</span></span>,</div>
            <div>Full stack developer</div>
          </div>
        </div>
        <div className="flex-1">
          <MirrorIcons />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-end">
      <Image src="/images/home/anon.png" height={511} width={649} objectFit="contain" />
      </div>
    </div>
    <div className="second bg-red-300 bg-opacity-25">

    </div>
  </>
}