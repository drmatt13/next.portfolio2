import { useState } from "react"
import CodeCard from '../components/CodeCard'

export default function Notes ({data}) {
  const [notes] = useState(data)
  return <>
    <div className="w-full pb-28 flex flex-col items-center">
      {notes && notes.map((data, key) => (
        <CodeCard key={key} data={data} />
      ))}
    </div>
  </>
}