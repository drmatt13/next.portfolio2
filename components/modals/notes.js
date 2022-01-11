import { useState, useEffect, useContext } from 'react'

// components
import Link from '../Link'

// context
import _appContext from '../../context/_appContext'


const NotesModal = ({ toggleModal }) => {

  const { setFileSettings, notes } = useContext(_appContext);


  const [keys] = useState(Object.keys(notes))

  useEffect(() => {
    setFileSettings(true)
    return () => setFileSettings(false)
  }, [setFileSettings])

  return <>
    <style jsx>{`
      .modal_container {
        padding-right: 10px;
      }
    `}</style>
    <div className="modal_container mx-2 my-2 animate-fade-in max-h-full overflow-y-auto grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {keys.map((key, i) => (
        <div key={i} className="h-36 flex flex-col shadow-lg border-2 dark:border-gray-600 bg-gray-200 dark:bg-gray-400 rounded-lg overflow-hidden">
          <h4 className="text-center text-lg bg-gray-100 dark:bg-gray-500 border-b border-gray-300 dark:border-gray-600">{key}</h4>
          <div className="flex-1 text-black p-2 overflow-y-auto">
            {notes[key].map((note, j) => (
              <Link 
                key={j} 
                className="hover:underline truncate"
                href={`/notes/${key}/${note.split(" ").join("-").toLowerCase()}`}
                toggleModal={toggleModal}
              >
                {note}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
}

export default NotesModal