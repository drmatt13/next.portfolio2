import { useState, useContext } from "react"

// components
import CodeCard from '../components/CodeCard'

// context
import _appContext from '../context/_appContext'

export default function Notes ({data}) {
  const { mobile } = useContext(_appContext)
  const [notes] = useState(data)
  return <>
    <div className={`${mobile ? "pb-14" : "pb-28"} w-full flex flex-col items-center`}>
      {notes && notes.map((data, key) => (
        <CodeCard key={key} data={data} />
      ))}
    </div>
  </>
}