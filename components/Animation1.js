import styles from "../styles/Animation1.module.scss"

const Loading = () => {
  return (
    <div 
      className={`${styles.la_ball_atom} ${styles.la_2x}`}
      style={{color: "#af74cf"}}
    >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Loading
