import Image from 'next/image'

// styles
import styles from '../styles/MirrorIcons.module.scss'

const MirrorIcons = () => {
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
        box-shadow: rgba(0, 0, 0, 0.25) 0 .5em .75em;
      }
    `}</style>
    <div className="relative perspective flex justify-center items-center">

      <div className="absolute width z-10 overflow-x-hidden">
        <div className={`${styles.slider_container} flex items-baseline`}>
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
          {/* duplicate */}
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

      <div className="absolute width h-16 transformed rounded overflow-hidden">
        <div className={`${styles.platform_container} translate-y-1/2 flex items-start filter blur-sm`}>
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
          {/* duplicate */}
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
  </>
}

export default MirrorIcons
