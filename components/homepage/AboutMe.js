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
        <div className="w-full flex">
          <div className="flex-1 space-y-8 columns-2">
          <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat omnis, numquam cupiditate maiores doloremque labore atque voluptates iure assumenda delectus maxime voluptate eum ullam!</p>
          <p>2. Lorem ipsum dolor sit amet consectetur eifjiefjiwefjf iwfjijfi wofkwofekwef woewefjwef woedkwedkew owdkkowed oewdkoed adipisicing elit. Minus placeat omnis, numquam cupiditate maiores doloremque labore atque voluptates iure assumenda delectus maxime voluptate eum ullam!</p>
          <p>3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat omnis, numquam cupiditate maiores doloremque labore atque voluptates iure assumenda delectus maxime voluptate eum ullam!</p>
          <p>4. Lorem ipsum dolor sit maiores doloremque labore atque voluptates iure assumenda delectus maxime voluptate eum ullam!</p>
          <p>5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat omnis, numquam cupiditate maiores doloremque labore atque voluptates iure assumenda delectus maxime voluptate eum ullam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus placeat omnis, numquam cupiditate maiores doloremque labore atque voluptates iure assumenda delectus maxime voluptate eum ullam!</p>
          </div>
          <div className="flex-1">x</div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
