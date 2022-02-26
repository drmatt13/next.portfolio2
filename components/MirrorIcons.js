import Image from 'next/image'

// styles
import styles from '../styles/MirrorIcons.module.scss'

const navigate = (url) => {
  const a = document.createElement('a')
  a.href = url
  a.target = '_blank'
  a.rel = 'noopener noreferrer'
  a.click()
}

const MirrorIcons = () => {

  return <> 
    <style jsx>{`
      .perspective {
        perspective: 400px;
      }
      .transformed {
        transform: rotate3d(1, 0, 0, 45deg);
        background: linear-gradient(to bottom, #fff0, #bbb8);
      }
      // .perspective:hover > div > div {
      //   animation-play-state: paused;
      // }
    `}</style>
    <div className="max-w-7xl w-full sm:w-[200%] sm:scale-50 md:w-[125%] md:scale-75 lg:w-full lg:scale-100 pl-[5%] pr-4 md:pl-[7.5%] sm:pr-2 lg:pr-8 2xl:pr-10 translate-y-[25%] md:translate-y-[20%] lg:translate-y-[5%] xl:translate-y-0 select-none">
      <div className="w-4" />
      <div className="relative perspective flex items-center">

        <div className={`z-10 relative flex overflow-x-hidden`}>
          <div className={`${styles.icon_container} flex items-end mb-16`}>
            <div onClick={() => navigate("https://www.python.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/python.webp" height={64} width={64} /></div>
            <div onClick={() => navigate("https://reactjs.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/react.webp" height={70} width={80} /></div>
            <div onClick={() => navigate("https://redux.js.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/redux.svg" height={64} width={64} /></div>
            <div onClick={() => navigate("https://graphql.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/graphql.webp" height={64} width={64} /></div>
            <div onClick={() => navigate("https://nodejs.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/nodejs.webp" height={50} width={90.4} /></div>
            <div onClick={() => navigate("https://nextjs.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/nextjs.svg" height={60} width={100} /></div>
            <div onClick={() => navigate("https://tailwindcss.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/tailwind.svg" height={64} width={64} /></div>
            <div onClick={() => navigate("https://www.postgresql.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/postgresql.webp" height={55} width={55} /></div>
            <div onClick={() => navigate("https://www.mongodb.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/mongodb.webp" height={48.1} width={71} /></div>
            <div onClick={() => navigate("https://cloud.google.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/gcp.webp" height={64} width={64} /></div>
            <div onClick={() => navigate("https://www.docker.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/docker.webp" height={64} width={72} /></div>
            <div onClick={() => navigate("https://kubernetes.io/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/kubernetes.svg" height={64} width={64} /></div>


            <div onClick={() => navigate("https://www.python.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/python.webp" height={64} width={64} /></div>
            <div onClick={() => navigate("https://reactjs.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/react.webp" height={70} width={80} /></div>
            <div onClick={() => navigate("https://redux.js.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/redux.svg" height={64} width={64} /></div>
            <div onClick={() => navigate("https://graphql.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/graphql.webp" height={64} width={64} /></div>
            <div onClick={() => navigate("https://nodejs.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/nodejs.webp" height={50} width={90.4} /></div>
            <div onClick={() => navigate("https://nextjs.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/nextjs.svg" height={60} width={100} /></div>
            <div onClick={() => navigate("https://tailwindcss.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/tailwind.svg" height={64} width={64} /></div>
            <div onClick={() => navigate("https://www.postgresql.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/postgresql.webp" height={55} width={55} /></div>
            <div onClick={() => navigate("https://www.mongodb.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/mongodb.webp" height={48.1} width={71} /></div>
            <div onClick={() => navigate("https://cloud.google.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/gcp.webp" height={64} width={64} /></div>
            <div onClick={() => navigate("https://www.docker.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/docker.webp" height={64} width={72} /></div>
            <div onClick={() => navigate("https://kubernetes.io/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mirror_icons/kubernetes.svg" height={64} width={64} /></div>
          </div>
        </div>

        <div className="absolute w-full h-16 transformed rounded overflow-hidden shadow-xl shadow-indigo-600/50 dark:shadow-purple-500/50">
          <div className={`${styles.platform_container} translate-y-1/2 flex items-start blur-sm`}>
            <div><Image src="/images/home/mirror_icons/python.webp" height={64} width={64} /></div>
            <div><Image src="/images/home/mirror_icons/react.webp" height={70} width={80} /></div>
            <div><Image src="/images/home/mirror_icons/redux.svg" height={64} width={64} /></div>
            <div><Image src="/images/home/mirror_icons/graphql.webp" height={64} width={64} /></div>
            <div><Image src="/images/home/mirror_icons/nodejs.webp" height={50} width={90.4} /></div>
            <div><Image src="/images/home/mirror_icons/nextjs.svg" height={60} width={100} /></div>
            <div><Image src="/images/home/mirror_icons/tailwind.svg" height={64} width={64} /></div>
            <div><Image src="/images/home/mirror_icons/postgresql.webp" height={55} width={55} /></div>
            <div><Image src="/images/home/mirror_icons/mongodb.webp" height={48.1} width={71} /></div>
            <div><Image src="/images/home/mirror_icons/gcp.webp" height={64} width={64} /></div>
            <div><Image src="/images/home/mirror_icons/docker.webp" height={64} width={72} /></div>
            <div><Image src="/images/home/mirror_icons/kubernetes.svg" height={64} width={64} /></div>
            
            <div><Image src="/images/home/mirror_icons/python.webp" height={64} width={64} /></div>
            <div><Image src="/images/home/mirror_icons/react.webp" height={70} width={80} /></div>
            <div><Image src="/images/home/mirror_icons/redux.svg" height={64} width={64} /></div>
            <div><Image src="/images/home/mirror_icons/graphql.webp" height={64} width={64} /></div>
            <div><Image src="/images/home/mirror_icons/nodejs.webp" height={50} width={90.4} /></div>
            <div><Image src="/images/home/mirror_icons/nextjs.svg" height={60} width={100} /></div>
            <div><Image src="/images/home/mirror_icons/tailwind.svg" height={64} width={64} /></div>
            <div><Image src="/images/home/mirror_icons/postgresql.webp" height={55} width={55} /></div>
            <div><Image src="/images/home/mirror_icons/mongodb.webp" height={48.1} width={71} /></div>
            <div><Image src="/images/home/mirror_icons/gcp.webp" height={64} width={64} /></div>
            <div><Image src="/images/home/mirror_icons/docker.webp" height={64} width={72} /></div>
            <div><Image src="/images/home/mirror_icons/kubernetes.svg" height={64} width={64} /></div>
          </div>
        </div>

      </div>
      <div className="w-4" />
    </div>
    
  </>
}

export default MirrorIcons