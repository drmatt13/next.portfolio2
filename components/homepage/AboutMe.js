import GlitchText from "../GlitchText";

const AboutMe = () => {
  return (
    <div className="pb-12 sm:pb-14">
      <div className="text-gray-800 dark:text-white">
        <div 
          className="text-2xl sm:text-4xl lg:text-5xl py-8 sm:py-12 text-center"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.25em",
          }}
        >
          <GlitchText text="ABOUT ME" />
        </div>
        <p className="px-6 text-center text-sm sm:text-md lg:text-base">
          lorum 9eif9ewif
        </p>
      </div>
    </div>
  )
}

export default AboutMe
