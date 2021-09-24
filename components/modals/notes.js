import { useState } from 'react'
import Link from '../Link'

const NotesModal = ({ toggleModal }) => {

  const [notes] = useState({
    'd3': ['d3'],
    'three': ['three'],
    'collection1': ['Note', 'Note2'],
    'data-structures': ['linked lists', 'stacks and queues', 'binary search trees'],
    'react': ['context1', 'redux1']
  })

  const [keys] = useState(Object.keys(notes))

  return <>
    <div className="animate-fade-in">
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