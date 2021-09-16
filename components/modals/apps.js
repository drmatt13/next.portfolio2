import { useState } from 'react'
import Image from 'next/image'
import Link from '../Link'

// styles
import styles from '../../styles/Modal-apps.module.scss'

// Images
import layeredImage from '../../public/images/apps/3D Layered Image.png'
import advancedTodos from '../../public/images/apps/Advanced Todos.png'
import pricingComponent from '../../public/images/apps/Pricing Component.png'
import visualSort from '../../public/images/apps/Visual Sort.png'
import pathFinder from '../../public/images/apps/Path Finder.png'

const AppsModal = ({ toggleModal }) => {

  const [apps] = useState([
    "3D Layered Image",
    "Advanced Todos",
    "Pricing Component",
    "Visual Sort",
    "Path Finder"
  ])

  return <>
    {/* <style jsx global>{`

    `}</style> */}
    <div className={`${styles.modal_container} animate-fade-in`}>
      {apps.map((app, i) => (
        <div className={styles.margin_container}>
          <Link 
            key={i} 
            href={`/apps/${app.split(" ").join("-").toLowerCase()}`}
            toggleModal={toggleModal}
          >
            <div className={`${styles.app_container} w-full rounded-2xl flex shadow-lg bg-gray-200 dark:bg-gray-400  transition-colors`}>
              <div className={styles.image_container}>
                <div>
                {app === "3D Layered Image" && <Image className="Image" src={layeredImage} layout="fill" />}
                  {app === "Advanced Todos" && <Image className="Image" src={advancedTodos} layout="fill" />}
                  {app === "Pricing Component" && <Image className="Image" src={pricingComponent} layout="fill" />}
                  {app === "Visual Sort" && <Image className="Image" src={visualSort} layout="fill" />}
                  {app === "Path Finder" && <Image className="Image" src={pathFinder} layout="fill" />}
                </div>
              </div>
              <div className={styles.test}>
                {app}
              </div>
            </div>
          </Link> 
        </div>
      ))}
    </div>
  </>
}

export default AppsModal