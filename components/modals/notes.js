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
    <div className="animate-fade-in h-full overflow-y-scroll">
      {keys.map((key, i) => (
        <div key={i}>
        <h4 style={{textDecoration: "underline", color: "#222a"}}>{key}</h4>
        <div>
          {notes[key].map((note, j) => (
            <Link 
              key={j} 
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