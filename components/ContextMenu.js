import { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';

// context
import _appContext from "../context/_appContext";
import modalContext from "../context/modalContext";

const ContextMenu = ({ contextMenu }) => {

  const menuRef = useRef();
  const flagRef = useRef(false);
  const { folders, setFolders, toggleModal } = useContext(_appContext);
  const { setProcessing } = useContext(modalContext);
  const [menu, setMenu] = useState({_id: undefined, options: undefined});

  const handleResize = () => {
    setMenu({_id: undefined, options: undefined})
  }

  // temp ghetto solution
  const timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // temp ghetto solution
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const processName = (arr, name) => {
    let names = arr.map(obj => obj.name).reduce((a, v) => ({ ...a, [v]: true}), {});
    let tempName = name;
    let count = 2;
    while (names[tempName]) tempName = `${name} (${count++})`;
    return tempName;
  }

  const api = async (url, config = undefined) => {
    const res = await axios(url, config);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return res.data;
  }

  const onClickHandler = async (folder_id, option) => {

    let data;
    flagRef.current = false;
    setMenu({_id: undefined, options: undefined});

    switch (option) {
      case "Create Folder":
        setProcessing(true);
        data = await api("/api/folders", { 
          method: "POST", 
          data: {
            name: processName(folders, "New Folder"),
          }
        });
        if (data.success) {
          const { _id, name, files } = data.folder;
          setFolders([...folders, { _id, name, files }]);
        }
        break;
      case "Rename Folder":
        // PUT /folders
        await delay(100);
        const folderName = document.getElementById(folder_id).firstChild.innerText;
        const newFolderName = prompt("Rename Folder", folderName);
        if (!newFolderName || folderName === newFolderName) return;
        setProcessing(true);
        data = await api("/api/folders", { method: "PUT", data: { _id: folder_id, name: newFolderName } });
        if (data.success) {
          const { _id, name, files } = data.folder;
          setFolders(folders.map(folder => folder._id === _id ? {_id, name, files } : folder));
        }
        break;
      case "Delete Folder":
        // DELETE /folders
        setProcessing(true);
        data = await api("/api/folders", { method: "DELETE", data: { _id: folder_id } });
        if (data.success) {
          const { _id } = data.folder;
          setFolders(folders.filter(folder => folder._id !== _id));
        }
        break;
      case "Create File":
        // POST /files
        setProcessing(true);
        const folderFiles = folders.filter(folder => folder._id === menu._id)[0].files;
        data = await api("/api/files", { 
          method: "POST", 
          data: { 
            folder_id, 
            name: processName(folderFiles, "new file"),
            files: folders.filter(folder => folder._id === menu._id)[0].files 
          } 
        });
        if (data.success) {
          setFolders(folders.map(folder => {
            if (folder._id === folder_id) {
              folder.files.push(data.file);
            }
            return folder;
          }));
        }
        break;
      case "Download":
        break;
      case "Edit File":
        toggleModal({ name: "editFile", _id: contextMenu.target.id });
        break;
      case "Open File":
        break;
      case "Rename File":
        // PUT /files

        await delay(100);
        const fileName = contextMenu.target.innerText;
        const newFileName = prompt("Rename File", fileName);
        if (!newFileName || fileName === newFileName) return;
        setProcessing(true);
        const files = folders
          .filter(folder => folder._id === menu._id)[0].files
          .map(file => file._id === contextMenu.target.id ? {_id: contextMenu.target.id, name: newFileName} : file);
        data = await api("/api/files", { 
          method: "PUT", 
          data: { 
            _id: contextMenu.target.id, 
            files,
            folder_id,
            name: newFileName 
          } 
        });
        if (data.success) {
          setFolders(folders.map(folder => folder._id === folder_id ? {_id: folder_id, name: folder.name, files } : folder));
        }
        break;
      case "Delete File":
        // DELETE /files
        setProcessing(true);
        data = await api("/api/files", { 
          method: "DELETE", 
          data: { 
            _id: contextMenu.target.id, 
            folder_id,
            files: folders.filter(folder => folder._id === menu._id)[0].files
          } 
        });
        if (data.success) {
          setFolders(folders.map(folder => {
            if (folder._id === menu._id) {
              folder.files = folder.files.filter(file => file._id !== contextMenu.target.id);
            }
            return folder;
          }));
        }
        break;
      default:
        break;
    }
    setProcessing(false);
    setMenu({_id: undefined, options: undefined})
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      flagRef.current = true;
    }
  }, []);

  useEffect(() => {
    const context = contextMenu.target.getAttribute("context");
    switch (context) {
      case "directory":
        setMenu({_id: undefined, options: ["Create Folder", "Download All", "Seed Database"]});
        break;
      case "folder border":
        setMenu({_id: contextMenu.target.id, options: ["Create File", "Rename Folder", "Delete Folder"]})
        break;
      case "folder":
        setMenu({_id: contextMenu.target.parentNode.id, options: ["Create File", "Rename Folder", "Delete Folder"]})
        break;
      case "file":
        setMenu({_id: contextMenu.target.parentNode.parentNode.parentNode.id, options: ["Download", "Edit File", "Open File", "Rename File", "Delete File"]})
        break;
      default:
        setMenu({_id: undefined, options: undefined})
        break;
    }
  }, [contextMenu])

  useEffect(() => {
    if (menu.options) {
      menuRef.current.style.left = `${contextMenu.x + 1}px`;
      menuRef.current.style.top = `${contextMenu.y + 1}px`;
      // doesnt work correctly
      menuRef.current.style.transform = "translateX(0)";
      menuRef.current.style.transform = "translateY(0)";
      if (menuRef.current.offsetWidth + contextMenu.x > window.innerWidth) {
        menuRef.current.style.transform = "translateX(-100%)";
      }
      if (menuRef.current.offsetHeight + contextMenu.y > window.innerHeight) {
        menuRef.current.style.transform = "translateY(-100%)";
      }
      // doesnt work correctly
      // trigger css reflow
      menuRef.current.style.animation = 'none';
      menuRef.current.offsetHeight; /* trigger reflow */
      menuRef.current.style.animation = null; 
    }
  }, [menu])

  return menu.options === undefined ? <></> : <>
    <style jsx>{`
      .select-none:last-of-type {
        border-bottom: none !important;
      }
    `}</style>
    <div 
      className='fixed top-0 left-0 flex flex-col rounded shadow-lg overflow-hidden animate-fade-in-fast'
      onContextMenu={(e) => e.preventDefault()}
      ref={menuRef}
    >
      {menu.options.map((option, i) => (
        <div
          className='py-2 px-4 bg-white hover:bg-stone-200 dark:hover:bg-zinc-300 border-b cursor-default select-none whitespace-nowrap'
          key={i}
          onClick={() => onClickHandler(menu._id, option)}
        >
          {option}
        </div>
      ))}
    </div>
  </>
}

export default ContextMenu;
