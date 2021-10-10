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
      height: 200vh;
    }
    `}</style>
    <Head></Head>
    <div className="">
    </div>
    {/* <div className="animate-fade-in container py-5 px-5 md:px-0">
      <div className="dark:text-white">mobile device: {mobile ? "true" : "false"}</div>
    </div> */}
  </>
}