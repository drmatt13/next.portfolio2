const Modal = ({ modal, setModal }) => {

  const closeModal = () => setModal(undefined)

  return <>
    <style jsx>{`
      .todo-modal {
        height: clamp(0px, 350px, 90vh);
        width: clamp(300px, 550px, 90vw);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    `}</style>
    <div className="absolute -top-28 left-0 h-screen w-full bg-gray-600 dark:bg-black bg-opacity-25 dark:bg-opacity-50 flex justify-center items-center">
      <div className="absolute top-0 left-0 h-full w-full" onClick={closeModal} />
      <div className="todo-modal flex flex-col p-3 rounded-3xl bg-gray-300 dark:bg-gray-500 bg-opacity-90 dark:bg-opacity-60 animate-fade-in">
        <div className="h-7 flex justify-between">
          <input className="flex-1 px-3 rounded-full dark:bg-black dark:text-white dark:bg-opacity-80" type="text" placeholder={`${modal} name...`} /> 
          <div
            onClick={closeModal} 
            className="ml-2.5 h-7 w-7 bg-white dark:bg-black dark:text-gray-300 dark:hover:text-black bg-opacity-100 dark:bg-opacity-80 hover:bg-red-400 dark:hover:bg-red-500 dark:hover:bg-opacity-70 rounded-full flex justify-center items-center cursor-pointer"
          >
            <i className="fas fa-times" />
          </div>
        </div>
        <div 
          contentEditable="true"
          className="flex-1 my-2.5 p-3 rounded-2xl bg-white dark:bg-black dark:text-white dark:bg-opacity-80"
        >
          content
        </div>
        <div 
          className={`cursor-pointer select-none h-10 w-full flex justify-center items-center rounded-3xl text-white bg-blue-500 dark:bg-blue-500 dark:bg-opacity-75 hover:bg-blue-400 dark:hover:bg-blue-500 transition-all`} 
        >
          Add Todo
        </div>
      </div>
    </div>
  </>
}

export default Modal
