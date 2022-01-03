import glitch from "../styles/glitch.module.scss";

const GlitchText = ({ text }) => {
  return (
    <span className={`${glitch.text}`} data-text={text}>
      {text}
    </span>
  )
}

export default GlitchText
