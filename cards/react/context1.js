export default [

{
"readme": `simple context without reducer + dispatch`,


"react context.js": `import { createContext } from 'react'

const context = createContext()

export default context`,


"next _app.js": `import { useState } from 'react'
import { useRouter } from 'next/router'

// context
import context from './context'

function MyApp({ Component, pageProps }) {
  
  // initialize router
  const router = useRouter()

  const [user_id, setUser_id] = useState(null)

  // check if mobile device
  const [mobile] = useState(
    typeof window !== 'undefined' ?
      /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      :
      null
  )

  return <>
    <context.Provider value={{ user_id, setUser_id, mobile, router }}>
        <Component {...pageProps} />
    </context.Provider>
  </>
}

export default MyApp`,

"next index.js": `import { useContext } from 'react'

// context
import context from './context'

const index = () => {

  // initilze context
  const { users, user_id } = useContext(socialContext)

  return <></>
}`

}
]