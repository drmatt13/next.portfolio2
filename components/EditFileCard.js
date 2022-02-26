import { useState, useEffect } from 'react';

// components
import EditFileTab from "./EditFileTab";

const EditFileCard = ({ note, keyMemo, setKeyMemo, swap }) => {

  const [icons, setIcons] = useState(["devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain"]);

  useEffect(() => {
    console.log(note);
  }, [])

  return (
    <div 
      className='mb-2 mr-2.5 rounded-md bg-white/50 shadow select-none cursor-move'
      notekey={note.key}
      type="card"
      draggable='true'
      onDragStart={e => {
        let type = e.target.getAttribute('type');
        let target = e.target;
        while (type === null) {
          target = target.parentElement;
          type = target.getAttribute('type');
        }
        if (type === 'card') {
          e.dataTransfer.setData('text/plain', JSON.stringify({ key: note.key, type }));
        }
      }}
      onDragOver={e => e.preventDefault()}
      onDrop={e => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        if (data.type !== 'card' || data.key === note.key) return; 
        let noteKey = e.target.getAttribute('notekey');
        let target = e.target;
        while (noteKey === null) {
          target = target.parentElement;
          noteKey = target.getAttribute('notekey');
        }
        swap(data.key, noteKey);
      }}
      onDragEnd={e => e.preventDefault()}
    >
      <div className='flex flex-col'>
        <div className='h-10 flex justify-between items-center'>
          <div className='h-full m-w-[50%] pl-3 flex items-center'>
            {icons && icons.map((icon, i) => (
              <i className={`pr-[3px] ${icon}`} key={i} />
            ))}
          </div>
          <div className='px-3 flex justify-center items-center'>
            <i 
              className={`px-1 fas ${!keyMemo[note.key].open ? "fa-angle-down" : "fa-angle-up"} cursor-pointer hover:scale-110 transition-transform`} 
              onClick={() => {
                keyMemo[note.key].open = !keyMemo[note.key].open;
                setKeyMemo({...keyMemo});
              }}
            />
          </div>
        </div>
        {keyMemo[note.key].open && <div className='flex w-full justify-center' >
          <div  className='my-1 h-[1px] w-[95%] bg-gray-400 dark:bg-black' />
        </div>}
      </div>
      {keyMemo[note.key].open && <div className='max-h-[18rem] flex justify-center' >
        <div className='flex-1 m-2.5 overflow-y-scroll' >
          <div className='flex flex-col pr-2.5 pl-4' >
            {note.obj.order.map(tab => (
              <EditFileTab key={tab} note={note} setIcons={setIcons} />
            ))}
            {/* plus */}
            <div className='py-3 w-full flex justify-center items-center'>
              <div className='rounded-full bg-black/10 dark:bg-white/30 h-10 w-10 flex justify-center items-center text-gray-500 hover:bg-white hover:text-black transition-colors cursor-pointer'>
                <i className='fa-solid fa-plus' />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>}
    </div>
  );
};

export default EditFileCard;
