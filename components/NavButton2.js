const NavButton2 = ({ className, onClick }) => {
  return <>
    <div 
      onClick={onClick}
      className={` 
        transition
        ease-linear
        pointer-events-auto
        cursor-pointer 
        absolute
        h-full 
        w-full
        rounded-full
      `}
    >
      <i className={`
        ${className} 
        h-full 
        w-full 
        flex 
        justify-center 
        items-center 
        text-md
        rounded-full
        transition
        ease-linear
        border
      border-white
        border-opacity-10
      `} />
    </div>
  </>
}

export default NavButton2
