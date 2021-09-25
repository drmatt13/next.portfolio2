import { useState } from 'react'
import Link from '../Link'

const NotesModal = ({ toggleModal }) => {
  const [notes] = useState({
    'd3': ['d3'],
    'data-structures': ['binary search trees', 'linked lists', 'stacks and queues'],
    'react': ['context1', 'redux1'],
    'test-collection': ['card1', 'card2', 'card3'],
    'three': ['three'],
})
  const [keys] = useState(Object.keys(notes))
  return <>
    <style jsx>{`
      .modal_container {
        padding-right: 10px;
      }
    `}</style>
    <div className="modal_container animate-fade-in max-h-full overflow-y-auto grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {keys.map((key, i) => (
        <div key={i} className="h-44 shadow-lg bg-gray-200 dark:bg-gray-400 rounded-lg overflow-hidden">
        <h4 className="text-center text-lg bg-gray-100 dark:bg-gray-500">{key}</h4>
        <div className="text-black p-2">
          {notes[key].map((note, j) => (
            <Link 
              key={j} 
              className="hover:underline"
              href={`/notes/${key}/${note.split(" ").join("-").toLowerCase()}`}
              toggleModal={toggleModal}
            >
              {note}
            </Link>
          ))}
        </div>
        <br />
        </div>
      ))}
    </div>
  </>
}

export default NotesModal