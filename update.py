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

export default NotesModal""" % (noteState)

file = open("./components/modals/notes.js", "w")
file.write(notesjs)
file.close()
