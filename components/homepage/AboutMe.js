import { useState, useEffect, useContext, useRef } from 'react'
import Image from "next/image"
import Head from 'next/head';

// components
import GlitchText from "../GlitchText";

// context
import _appContext from "../../context/_appContext";

// images
import image1 from "../../public/images/matt/image1.png"
import image2 from "../../public/images/matt/image2.png"
import image3 from "../../public/images/matt/image3.png"
import image4 from "../../public/images/matt/image4.png"
import image5 from "../../public/images/matt/image5.png"

function getElementIndex(element) {
  return [].indexOf.call(element.parentNode.children, element);
}

const AboutMe = () => {

  const { darkMode, mobile } = useContext(_appContext);
  const [image, setImage] = useState(image5);
  const [memo, setMemo] = useState([]);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          memo[getElementIndex(entry.target.parentNode)-2] = "unshift";
          entry.target.parentNode.classList.remove("shift");
          entry.target.parentNode.classList.add("unshift", "transition-all", "duration-300", "ease-in");
          observer.unobserve(entry.target);
        } 
      })
    }, { threshold: mobile ? .375 : .6 })
    if (ref.current.children.length > 2) {
      for (let i = 2; i < ref.current.children.length; i++) {
        memo.push("shift");
        observer.observe(ref.current.children[i].firstChild);
      }
    }
    return () => {
      observer.disconnect();
      setMemo([]);
    }
  }, [])

  useEffect(() => {
    if (ref.current.children.length > 2) {
      memo.forEach((state, index) => {
        ref.current.children[index+2].classList.add(state);
      })
    }
  })

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
      </Head>
      <style jsx>{`
        .span {
          background-color: #fff4;
        }
        p {
          background: linear-gradient(45deg, 
            ${
              darkMode ?
                "#d0cdfa, #f0bbe1"
                :
                "#black, #d0cdfa"
            }
          );
          background-clip: text;
          -webkit-background-clip: text;
          color: rgba(
            ${
              darkMode ?
                "0,0,0,0.1"
                :
                "0,0,0,0.75"
            }
          );
        }
        p:last-of-type {
          margin-bottom: 0;
        }
        .shift {
          transform: translateX(-100vw);
          opacity: 0;
        }
        .unshift span {
          left: 0 !important;
          transform: translateX(0) !important;
        }
      `}</style>
      <div id="about" className='pt-12 max-w-[140rem] m-auto overflow-x-hidden'>
        <div 
          ref={ref}
          className="text-gray-800 dark:text-white text-sm md:text-base lg:text-lg xl:text-xl font-semibold"
          style={{
            fontFamily: "'Ubuntu', sans-serif",
          }}
        >
          <div 
            className="text-2xl sm:text-4xl lg:text-5xl sm:pb-8 md:pb-12 text-center"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: "0.25em",
            }}
          >
            <GlitchText text="ABOUT ME" />
          </div>
          <div className="relative z-10 w-full md:w-96 sm:mb-6 md:mb-4 lg:mb-[1.7rem] md:mr-10 md:ml-6 lg:mr-28 lg:ml-8 xl:mr-32 xl:ml-10 2xl:mr-48 2xl:ml-12 md:float-right">
            <div className="flex flex-col items-center w-full scale-75 sm:scale-90 lg:scale-100">
              <div className="z-10 bg-red-400/20 rounded-full h-52 w-52 shadow-2xl shadow-indigo-600/50 dark:shadow-purple-500/50 overflow-hidden">
                <Image src={image} alt="Matt" width={208} height={208} />
              </div>  
              <div className="mt-8 flex gap-2">
                {[image5, image1, image3, image2, image4].map((src, i) => (
                  <div
                    key={i} 
                    className="bg-red-400/20 h-16 w-16 rounded-full cursor-pointer hover:scale-90 overflow-hidden transition-transform"
                    onMouseEnter={() => setImage(src)}
                    onTouchStart={() => setImage(src)}
                  >
                    <Image src={src} width={208} height={208} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className='relative mx-5 md:mx-10 lg:mx-28 xl:mx-32 2xl:mx-48 mb-3 lg:mb-4 indent-6'>
            <span className='-z-10 absolute md:-right-20 lg:-right-56 xl:-right-64 2xl:-right-96 h-full w-full translate-x-full'/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aperiam laboriosam, eos asperiores, voluptatibus necessitatibus dolorum quam quas accusamus quae nostrum optio fugiat inventore beatae, fugit similique quod? Ratione, voluptatibus!
          </p>
          <p className='relative mx-5 md:mx-10 lg:mx-28 xl:mx-32 2xl:mx-48 mb-2 md:mb-3 lg:mb-4 indent-6'>
            <span className='-z-10 absolute md:-right-20 lg:-right-56 xl:-right-64 2xl:-right-96 h-full w-full translate-x-full'/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam aliquid doloribus repudiandae dolorum assumenda sed eligendi quo aspernatur delectus minima repellendus quaerat voluptates veritatis quos, quod dolorem optio. Ratione quo, soluta commodi atque voluptates quasi magnam asperiores rem. Nobis?
          </p>
          <p className='relative mx-5 md:mx-10 lg:mx-28 xl:mx-32 2xl:mx-48 mb-2 md:mb-3 lg:mb-4 indent-6'>
            <span className='-z-10 absolute md:-right-20 lg:-right-56 xl:-right-64 2xl:-right-96 h-full w-full translate-x-full'/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum impedit at animi saepe quo ex aliquam consectetur laudantium et sapiente! Error pariatur laborum quia ab ipsum nesciunt deleniti veritatis repellat fugit. Est fugit pariatur iure ex cupiditate officiis laborum, veniam repellat expedita tempora maiores quidem aperiam quis eum vero corrupti officia? Incidunt a, amet adipisci aperiam neque odit dolor rerum excepturi nobis, unde fugiat? Cumque officiis accusantium unde. Officia, voluptates? Eius, ut dolore. Nemo nesciunt cumque ducimus rerum quidem architecto consequuntur laborum, a fuga quia quo rem, modi ut obcaecati illum alias! Illo, repellendus sed. Ad voluptatibus totam laborum amet?
          </p>
          <p className='relative mx-5 md:mx-10 lg:mx-28 xl:mx-32 2xl:mx-48 mb-2 md:mb-3 lg:mb-4 indent-6'>
            <span className='-z-10 absolute md:-right-20 lg:-right-56 xl:-right-64 2xl:-right-96 h-full w-full translate-x-full'/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum impedit at animi saepe quo ex aliquam consectetur laudantium et sapiente! Error pariatur laborum quia ab ipsum nesciunt deleniti veritatis repellat fugit. Est fugit pariatur iure ex cupiditate officiis laborum, veniam repellat expedita tempora maiores quidem aperiam quis eum vero corrupti officia? Incidunt a, amet adipisci aperiam neque odit dolor rerum excepturi nobis, unde fugiat? Cumque officiis accusantium unde. Officia, voluptates? Eius, ut dolore. Nemo nesciunt cumque ducimus rerum quidem architecto consequuntur laborum, a fuga quia quo rem, modi ut obcaecati illum alias! Illo, repellendus sed. Ad voluptatibus totam laborum amet?
          </p>
        </div>
      </div>
    </>
  )
};

export default AboutMe;
