import { useState } from 'react';

const EditFileTab = ({ note, setIcons }) => {

  const [open, setOpen] = useState(false);
  
  return (
    <div
      className='mr-2.5 mb-2 w-full flex flex-col bg-white rounded-md shadow-md'
      draggable='true'
      type="tab"
      onDragStart={e => {
        let type = e.target.getAttribute('type');
        let target = e.target;
        while (type === null) {
          target = target.parentElement;
          type = target.getAttribute('type');
        }
        if (type === 'tab') {
          e.dataTransfer.setData('text/plain', JSON.stringify({ key: note.key, type }));
        }
      }}
      onDragOver={e => e.preventDefault()}
      onDrop={e => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        if (data.type !== "tab" || data.key !== note.key) return;
        console.log(data);
      }}
    >
      <div className='h-10 flex justify-between items-center'>
        <div className='h-full m-w-[50%] pl-3 flex items-center'>
          <i className="pr-1.5 devicon-html5-plain" />
          <div className='pr-1.5'>
            <select className='border'>
              <option value="c">c</option>
              <option value="c++">c++</option>
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="js">js</option>
              <option value="node">node</option>
              <option value="react">react</option>

            </select>
          </div>
          <div className="pr-1.5">
            {note.obj.title}
          </div>
        </div>
        <div className='px-3 flex justify-center items-center' >
          <i 
            className={`px-1 fas ${!open ? "fa-angle-down" : "fa-angle-up"} cursor-pointer hover:scale-110 transition-transform`} 
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      {open && <div className='flex w-full justify-center'>
        <div  className='my-1 h-[1px] w-[95%] bg-gray-400 dark:bg-black' />
        <div className='h-48'>

        </div>
      </div>}
    </div>
  );
};

export default EditFileTab;
