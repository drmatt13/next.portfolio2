import { useState, useEffect, useContext, useRef } from 'react'

// components
import EditFileCard from '../EditFileCard'

// context
import _appContext from '../../context/_appContext'
import modalContext from '../../context/modalContext'

// hooks
import useFetch from '../../hooks/useFetch'

const EditFileModal = () => {

  const { darkMode, modal, toggleModal } = useContext(_appContext);
  const { setProcessing } = useContext(modalContext);
  const listRef = useRef();
  const [notes, setNotes] = useState([
    // { key: "a", obj: {
    //     title: "title",
    //     tabs: {
    //       html: "<h1>Hello World</h1>",
    //       css: "body { color: red; }",
    //       js: "console.log('Hello World')",
    //     },
    //     order: ["html", "css", "js"],
    //     render: ["html", "css", "js"]
    //   }
    // },
    // { key: "b", obj: {} },
    // { key: "c", obj: {} },
  ]);
  const [keyMemo, setKeyMemo] = useState({
    // a: { place: 0, open: false},
    // b: { place: 1, open: false},
    // c: { place: 2, open: false},
  });

  const [animate, setAnimate] = useState(undefined);

  const { loading, data, error } = useFetch({
    URL: `/api/files?_id=${modal._id}`,
    method: 'GET'
  });

  useEffect(() => {
    if (loading) setProcessing(true);
    if (!loading && data) {
      if (data.file.data) {
        let notes = [];
        let keyMemo = {};
        let count = 0;
        for (let note of JSON.parse(data.file.data)) {
          notes.push({ key: count, obj: note });
          keyMemo[count] = { place: count, open: false };
          count++;
        }
        setNotes(notes);
        setKeyMemo(keyMemo);
      }
    }
    setProcessing(false)
  }, [data, loading])

  useEffect(() => {
    if (animate) {
      listRef.current.children[animate[0]].classList.add("animate-fade-in");
      listRef.current.children[animate[1]].classList.add("animate-fade-in");
    }
  }, [animate])

  // swap 2 array items with drag and drop + animate effect
  const swap = (index1, index2) => {
    const temp = keyMemo[index1].place;
    keyMemo[index1].place = keyMemo[index2].place;
    keyMemo[index2].place = temp;
    
    const temp2 = notes[keyMemo[index1].place];
    notes[keyMemo[index1].place] = notes[keyMemo[index2].place];
    notes[keyMemo[index2].place] = temp2;

    listRef.current.children[keyMemo[index1].place].classList.remove("animate-fade-in");
    listRef.current.children[keyMemo[index2].place].classList.remove("animate-fade-in");

    setNotes([...notes]);
    setAnimate([keyMemo[index1].place, keyMemo[index2].place]);
  }

  return (
    <div className="relative h-full flex flex-col overflow-hidden animate-fade-in">
      <div 
        className='absolute top-2.5 right-2.5 h-6 w-6 flex justify-center items-center shadow-md bg-gray-500/50 dark:bg-gray-400/50 hover:bg-rose-500/60 dark:hover:bg-red-400/60 border border-gray-400/50 hover:border-red-400/10 dark:border-gray-900/50 rounded-full cursor-pointer transition-colors'
        onClick={() => toggleModal(undefined)}
      >
        <i className='fas fa-times text-sm text-gray-900/75 hover:text-gray-900/90 transition-colors' />
      </div>
      <div 
        className='absolute top-2.5 right-10 h-6 w-6 flex justify-center items-center shadow-md bg-gray-500/50 dark:bg-gray-400/50 hover:bg-sky-400/80 dark:hover:bg-sky-400/80 border border-gray-400/50 dark:border-gray-900/40 rounded-full cursor-pointer transition-colors'
        // onClick={() => toggleModal({ name: "notes" })} *-- MAXIMIZE || MINIMIZE --*
      >
        <i className='fa-regular fa-square text-xs text-gray-900/75 hover:text-gray-900/90 transition-colors' />
      </div>
      <div 
        className='absolute top-2.5 right-[4.375rem] h-6 w-6 flex justify-center items-center shadow-md bg-green-500/50 dark:bg-green-400/60 hover:bg-green-400/60 dark:hover:bg-green-400/75 border border-green-500/50 hover:border-green-400/50 dark:border-gray-900/40 dark:hover:border-green-800/50 rounded-full cursor-pointer transition-colors'
        onClick={() => toggleModal({ name: "notes" })}
      >
        <i className='fas fa-check text-sm text-gray-900/75 hover:text-gray-900/90 transition-colors' />
      </div>
      <div 
        className='absolute top-1 left-2 h-10 w-10 flex justify-center items-center cursor-pointer rounded-full overflow-hidden hover:scale-110 transition-transform'
        onClick={() => toggleModal({ name: "notes" })}
      >
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
        >
          <path
            fill={ darkMode ? "#bbbbbb" : "#fff"}
            d="M56.25 26.12v5.867H28.41v8.067l-12.66-11 12.84-11.02-.181 8.089 27.84-.003"
          ></path>
          <g
            fill="none"
            stroke={ darkMode ? "#7a828f" : "#2c3441"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M56.25 31.99H28.41v8.067l-12.66-11 12.66-11v8.066h27.84v5.867M34.99 53.94l-4.1-10-4.09 10M28.16 51.54h5.47M48.64 44.38v9.56M48.64 50.58l5.47-6.2M51.27 47.59l3.28 6.35M44.76 53.04c-.624.554-1.43.86-2.264.859v0a3.412 3.412 0 01-3.414-3.413v-2.731a3.414 3.414 0 013.413-3.413v0a3.4 3.4 0 012.264.859M21.43 49.1h-3.645v-4.761h3.645a2.38 2.38 0 012.381 2.38v0A2.38 2.38 0 0121.43 49.1v0"></path>
            <path d="M21.43 53.86h-3.645v-4.761h3.645a2.382 2.382 0 012.38 2.38v0a2.38 2.38 0 01-2.38 2.381v0"></path>
          </g>
        </svg>
      </div>
      <div className='h-14 w-full shrink-0' />
      <style jsx>{`
        .flex-1 > div:last-of-type {
          margin-bottom: 0 !important;
        } 
      `}</style>
      <div 
        className='flex-1 w-full flex flex-col overflow-y-scroll'
        ref={listRef}
      >
        {notes && notes.map((note, index) => (
          <EditFileCard 
            key={index} 
            note={note}
            keyMemo={keyMemo}
            setKeyMemo={setKeyMemo}
            swap={swap}
          />
        ))}
        {/* plus */}
        <div className='py-3 pr-2.5 w-full flex justify-center items-center'>
          <div className='rounded-full bg-black/10 dark:bg-white/30 h-10 w-10 flex justify-center items-center text-gray-500 dark:text-gray-700 hover:bg-white hover:text-black transition-colors cursor-pointer'>
            <i className='fa-solid fa-plus' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFileModal