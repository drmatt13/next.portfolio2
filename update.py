from shutil import rmtree
from os import listdir, makedirs
from os.path import isfile, exists

if exists("./pages/notes"):
    rmtree("./pages/notes")
makedirs("./pages/notes")
notes = listdir('./cards')
noteState = ""
for dir in notes:
    note = dir.replace(" ", "-")
    noteState += "    '%s': [" % (note)
    if not exists("./pages/notes/%s" % (note)):
        makedirs("./pages/notes/%s" % (note))
    for card in listdir('./cards/' + str(dir)):
        noteState += "'%s', " % (card.split(".")[0])
        page = """// components
import Notes from '../../../components/Notes'

// card data
import data from '../../../cards/%s/%s'

export default function Index () {
  return <Notes data={data} />
}""" % (dir, card.split(".")[0])
        file = open("./pages/notes/%s/%s" %
                    (note, card.replace(" ", "-")), "w")
        file.write(page)
        file.close()
    noteState = noteState[:-2] + "],\n"

notesjs = """import { useState } from 'react'
import Link from '../Link'

const NotesModal = ({ toggleModal }) => {
  const [notes] = useState({\n%s})
  const [keys] = useState(Object.keys(notes))
  return <>
    <style jsx>{`
      .modal_container {
        padding-right: 10px;
      }
    `}</style>
    <div className="modal_container animate-fade-in max-h-full overflow-y-auto grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

export default NotesModal""" % (noteState)

file = open("./components/modals/notes.js", "w")
file.write(notesjs)
file.close()
