import { useState, useEffect, useRef } from 'react'
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

  const [topIcon, setTopIcon] = useState()
  const [bottomIcon, setBottomIcon] = useState()
  const [animate, setAnimate] = useState(false)

  const topObservationRef = useRef();
  const topContainerRef = useRef();
  const bottomContainerRef = useRef();

  useEffect(() => {
    topContainerRef.current.classList.add(styles.icon_animation)
    // bottomContainerRef.current.classList.add(styles.blur_animation)
    if (topIcon) {
      topObservationRef.current = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            setAnimate(false)
            topContainerRef.current.removeChild(topIcon)
            topContainerRef.current.appendChild(topIcon)
            topObservationRef.current.unobserve(topIcon)
            setTopIcon(topContainerRef.current.firstChild)
            // bottomContainerRef.current.classList.remove(styles.blur_animation)
            // bottomContainerRef.current.removeChild(bottomIcon)
            // bottomContainerRef.current.appendChild(bottomIcon)
            // setBottomIcon(bottomContainerRef.current.firstChild)
          }
        });
      });
      topObservationRef.current.observe(topIcon);
    }
  }, [topIcon, setTopIcon])

  useEffect(() => {
    if (!animate) {
      topContainerRef.current.classList.remove(styles.icon_animation)
      setAnimate(true)
    }
  }, [animate, setAnimate])

  useEffect(() => {
    setTopIcon(topContainerRef.current.firstChild)
    setBottomIcon(bottomContainerRef.current.firstChild)
  }, [])

  return <> 
    <style jsx>{`
      .perspective {
        perspective: 400px;
      }
      .width {
        width: clamp(0px, 80vw, 500px);
      }
      .transformed {
        transform: rotate3d(1, 0, 0, 45deg);
        background: linear-gradient(to bottom, #fff0, #bbb8);
        // box-shadow: rgba(0, 0, 0, 0.25) 0 .5em .75em;
      }
    `}</style>
    <div className="w-full pl-[5%] pr-4 md:pl-[7.5%] sm:pr-2 lg:pr-8 2xl:pr-10 inline-flex justify-center items-stretch">
      <div className="w-4" />
      <div className="relative perspective flex items-center translate-y-[25%] md:translate-y-[20%] xl:translate-y-[10%] 2xl:translate-y-0">

        <div className="z-10 overflow-x-hidden">
          <div ref={topContainerRef} className={`${styles.icon_container} flex items-end mb-16`}>
            <div onClick={() => navigate("https://www.python.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/python.png" height={64} width={64} /></div>
            <div onClick={() => navigate("https://reactjs.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/react.png" height={70} width={80} /></div>
            <div onClick={() => navigate("https://redux.js.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/redux.svg" height={64} width={64} /></div>
            <div onClick={() => navigate("https://graphql.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/graphql.png" height={64} width={64} /></div>
            <div onClick={() => navigate("https://nodejs.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/nodejs.png" height={50} width={90.4} /></div>
            <div onClick={() => navigate("https://nextjs.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/nextjs.svg" height={60} width={100} /></div>
            <div onClick={() => navigate("https://tailwindcss.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/tailwind.svg" height={64} width={64} /></div>
            <div onClick={() => navigate("https://www.postgresql.org/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/postgresql.png" height={55} width={55} /></div>
            <div onClick={() => navigate("https://www.mongodb.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/mongodb.png" height={48.1} width={71} /></div>
            <div onClick={() => navigate("https://cloud.google.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/gcp.png" height={64} width={64} /></div>
            <div onClick={() => navigate("https://www.docker.com/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/docker.png" height={64} width={72} /></div>
            <div onClick={() => navigate("https://kubernetes.io/")} className="hover:scale-90 cursor-pointer transition-all"><Image src="/images/home/kubernetes.svg" height={64} width={64} /></div>
          </div>
        </div>

        <div className="absolute w-full h-16 transformed rounded overflow-hidden shadow-xl shadow-indigo-600/50 dark:shadow-purple-500/50">
          <div ref={bottomContainerRef} className={`${styles.platform_container} translate-y-1/2 flex items-start blur-sm`}>
            <div><Image src="/images/home/python.png" height={64} width={64} /></div>
            <div><Image src="/images/home/react.png" height={70} width={80} /></div>
            <div><Image src="/images/home/redux.svg" height={64} width={64} /></div>
            <div><Image src="/images/home/graphql.png" height={64} width={64} /></div>
            <div><Image src="/images/home/nodejs.png" height={50} width={90.4} /></div>
            <div><Image src="/images/home/nextjs.svg" height={60} width={100} /></div>
            <div><Image src="/images/home/tailwind.svg" height={64} width={64} /></div>
            <div><Image src="/images/home/postgresql.png" height={55} width={55} /></div>
            <div><Image src="/images/home/mongodb.png" height={48.1} width={71} /></div>
            <div><Image src="/images/home/gcp.png" height={64} width={64} /></div>
            <div><Image src="/images/home/docker.png" height={64} width={72} /></div>
            <div><Image src="/images/home/kubernetes.svg" height={64} width={64} /></div>
            
          </div>
        </div>

      </div>
      <div className="w-4" />
    </div>
    
  </>
}

export default MirrorIcons