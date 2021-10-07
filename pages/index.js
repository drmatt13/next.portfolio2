import { useContext } from 'react'
import Head from 'next/head'

// context
import _appContext from '../context/_appContext'

// styles
import styles from '../styles/Home.module.scss'

export default function Home() {

  const { darkMode, mobile } = useContext(_appContext)

  return <>
    <style jsx>{`
    div {
      background: url(images/home/background-sparks.jpg) center top repeat-y;
      animation: sparks-move 70s infinite linear;
      @keyframes sparks-move{
        0%    { background-position: center top; }
        100%  { background-position: center -1150px; }
      }
    }
    `}</style>
    <Head></Head>
    {/* <div className="h-screen w-full overscroll-y-auto">
    </div> */}
    {/* <div className="animate-fade-in container py-5 px-5 md:px-0">
      <div className="dark:text-white">mobile device: {mobile ? "true" : "false"}</div>
    </div> */}
  </>
}