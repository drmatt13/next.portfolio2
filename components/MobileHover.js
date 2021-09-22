import { useEffect, Fragment, useRef } from "react"

const MobileHover = ({ children }) => {

  const ref = useRef()

  useEffect(() => {
    ref.current
  }, [])

  return (
    <div ref={ref}>
      { children }
    </div>
  )
}

export default MobileHover
