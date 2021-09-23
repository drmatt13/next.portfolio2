import { useContext } from 'react'

// context
import _appContext from '../context/_appContext'

export default function Home() {

  const { mobile } = useContext(_appContext)

  return <>
    <div className="animate-fade-in container py-5 px-5 md:px-0">
      <div className="dark:text-white">mobile device: {mobile ? "true" : "false"}</div>
    </div>
  </>
}