// styles
import styles from '../styles/AppLoading.module.scss'

const AppLoading = () => {
  return <>
    <div className='h-screen w-screen flex justify-center items-center text-white bg-gradient-to-bl from-stone-200 to-blue-500 dark:from-neutral-900 dark:to-purple-900'>
      <div className={`${styles.loader}`}>
        Loading
      </div>
    </div>
  </>
}

export default AppLoading
