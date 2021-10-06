import { useContext } from 'react'

// context
import _appContext from '../../../context/_appContext'

// styles
import styles from '../styles/Results.module.scss'

const Results = () => {

  const { darkMode } = useContext(_appContext)

  return <>
    <div className={`${styles.results_container} ${darkMode ? styles.dark : styles.light}`}>
      <div>
        {/* results */}
      </div>
    </div>
  </>
}

export default Results