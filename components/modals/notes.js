import { useState, useContext } from 'react'

// components
import ContextMenu from '../ContextMenu'
import Link from '../Link'

// context
import _appContext from '../../context/_appContext'

const NotesModal = () => {

  const { folders, toggleModal } = useContext(_appContext);
  const [contextMenu, setContextMenu] = useState();

  const configureContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ target: e.target, x: e.clientX, y: e.clientY });
  }

  return <>
    <style jsx>{`
      .modal_container {
        padding-right: 10px;
      }
    `}</style>
    <>
      <div 
        className='h-full'
        context="directory"
        onContextMenu={configureContextMenu}
        onClick={() => setContextMenu(undefined)}
      >
        <div 
          className="modal_container animate-fade-in grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          context="directory"
        >
          {folders.map((folder) => (
            <div 
              key={folder._id} 
              className="h-36 flex flex-col shadow-lg border-2 dark:border-gray-600 bg-gray-200 dark:bg-gray-400 rounded-lg overflow-hidden animate-fade-in"
              context="folder border"
              id={folder._id}
            >
              <h4 
                className="text-center text-lg bg-gray-100 dark:bg-gray-500 border-b border-gray-300 dark:border-gray-600"
                data-context-menu="Rename Folder, Delete Folder"
                context="folder"
              >
                {folder["name"]}
              </h4>
              <div 
                className="flex-1 text-black p-2 overflow-y-auto"
                context="folder"
              >
                {folder.files?.map(file => (
                  <Link 
                    key={file._id}
                    className="hover:underline truncate table"
                    context="file"
                    href={`/notes/${file._id}`}
                    toggleModal={toggleModal}
                  >
                    <div
                      context="file" 
                      id={file._id}
                    >
                      {file.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    {contextMenu && <>
      <ContextMenu contextMenu={contextMenu} />
    </>}
  </>
}

export default NotesModal