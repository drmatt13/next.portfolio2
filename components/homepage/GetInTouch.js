import GlitchText from "../GlitchText";

const AboutMe = () => {
  return (
    <div id="getintouch" className="pb-12 sm:pb-14">
      <div className="text-gray-800 dark:text-white">
        <div 
          className="text-2xl sm:text-4xl lg:text-5xl py-8 sm:py-12 text-center"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.25em",
          }}
        >
          <GlitchText text="GET IN TOUCH" />
        </div>
        <form className="text-center">
          <label>First name:</label><br/>
          <input type="text" id="fname" name="fname" /><br/>
          <label>Last name:</label><br/>
          <input type="text" id="lname" name="lname" /><br />
          <label>Email:</label><br/>
          <input type="text" id="fname" name="fname" /><br/>
          <label>Phone Number:</label><br/>
          <input type="text" id="lname" name="lname" /><br />
          <input type="submit" value="place holder" />
        </form>
      </div>
    </div>
  )
}

export default AboutMe
