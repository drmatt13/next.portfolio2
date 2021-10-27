import { useState, useEffect, useCallback, useRef, useContext } from 'react'
import hljs from 'highlight.js';

// context
import _appContext from '../context/_appContext' 

// styles
import styles from '../styles/CodeCard.module.scss'

const CodeCard = ({ data }) => {

  const { darkMode, mobile } = useContext(_appContext),
        [previousTab, setPreviousTab] = useState(0),
        [selectedTab, setSelectedTab] = useState(0),
        [height, setHeight] = useState(200),
        containerRef = useRef(),
        wrapperRef = useRef(),
        headerRef = useRef()

  const deconstructLanguage = useCallback((language) => {
    const object = {
      "c": ["devicon-c-plain colored", "c"],
      "c++": ["devicon-cplusplus-plain colored", "c++"],
      "html": ["devicon-html5-plain colored", "html"],
      "css": ["devicon-css3-plain colored", "css"],
      "javascript": ["devicon-javascript-plain colored", "js"],
      "node": ["devicon-nodejs-plain colored", "js"],
      "react": ["devicon-react-original colored", "js"],
      "redux": ["devicon-redux-original colored", "js"],
      "next": ["devicon-nextjs-original colored", "js"],
      "graphql": ["devicon-graphql-plain colored", "js"],
      "sql": ["devicon-postgresql-plain colored", "sql"],
      "mongodb": ["devicon-mongodb-plain colored", "js"],
      "firebase": ["devicon-firebase-plain colored", "js"],
      "python": ["devicon-python-plain colored", "python"],
      "java": ["devicon-java-plain colored", "java"],
      "typescript": ["devicon-typescript-plain colored", "typescript"],
      "sass": ["devicon-sass-original colored", "scss"],
      "tailwind": ["devicon-tailwindcss-plain colored", "html"],
      "php": ["devicon-php-plain colored", "php"],
      "npm": ["devicon-npm-original-wordmark colored", null],
      "git": ["devicon-git-plain colored", null],
      "docker": ["devicon-docker-plain colored", null],
      "kubernetes": ["devicon-kubernetes-plain colored", null],
      "facebook": ["devicon-facebook-plain colored", "js"],
      "file": ["far fa-file-alt", null],
      "csv": ["fas fa-file-csv", null],
      "cmd": ["fas fa-terminal", null],
      "terminal": ["fas fa-terminal", null],
      "output": ["fas fa-code", null, "output"],
      "image":  ["fas fa-image", null],
      "readme": ["far fa-file-alt", null],
      "readme2": ["far fa-file-alt", null, "consolas"]
    }
    return (language in object) ? object[language] : ["fas fa-question", null]
  }, []) 

  const render = useCallback((values) => {
    let iframe = document.createElement("iframe")
    let code = []
    for (let [key, value] of Object.entries(data)) {
      if (values.includes(key)) {
        switch (key.split(" ")[0]) {
          case "html":
            code.push(value)
            break;
          case "css":
            code.push(`<style>${value}</style>`)
            break;
          case "javascript":
            code.push(`<script type="module" defer>${value}</script>`)
            break;          
          default:
            break;
        }
      }
    }
    iframe.srcdoc = code.join(" ")
    iframe.style.display = "none"
    return iframe
  }, [])

  const generateCodeCard = useCallback(() => {
    for (let x = {i: 0, data: Object.entries(data)}; x.i < x.data.length; x.i++) {

      let i = x.i,
        [key, value] = x.data[x.i],
        deconstruct = key.split(" "),
        [style, language, extraStyle] = deconstructLanguage(deconstruct[0])
        
      if (value !== null) {
        let iframe
        // create tabs
        const div = document.createElement('div')
        if (deconstruct[0] === 'render') {
          iframe = render(value)
          div.setAttribute("render", true)
          div.innerHTML = `<i class="devicon-codepen-plain" style="color: limegreen;"></i>${deconstruct.length === 1 ? key : deconstruct.slice(1).join(' ')}`
        } else if (["image-sm", "image-md", "image-lg"].includes(key)) {

          // image functionality ------- delete this note after

        } else {
          div.innerHTML = `<i class="${style}"></i>${deconstruct.length === 1 ? key : deconstruct.slice(1).join(' ')}`
        }
        div.addEventListener("click", () => {setSelectedTab(i)})
        headerRef.current.appendChild(div)
        
        // generate tabs content
        if (iframe) wrapperRef.current.appendChild(iframe)
        else {
          const pre = document.createElement('pre')
          pre.style.display = "none"
          if (extraStyle) pre.classList.add(styles[extraStyle])
          pre.innerHTML = language ? hljs.highlight(value.toString().trim(), { language }).value : value.toString().trim()
          wrapperRef.current.appendChild(pre)
        }
      }
      // count++
    }
    // if there is a tab, set first tab to active
    if (wrapperRef.current.childNodes[0]) {
      headerRef.current.childNodes[0].classList.add(styles.selected)
      wrapperRef.current.childNodes[0].style.display = null
    }
  }, [selectedTab, setSelectedTab])

  useEffect(generateCodeCard, [])

  useEffect(() => {
    // toggle tabs
    headerRef.current.childNodes[previousTab].removeAttribute("class")
    if (!headerRef.current.childNodes[selectedTab].getAttribute("render")) {
      headerRef.current.childNodes[selectedTab].classList.add(styles.selected)
    } else {
      headerRef.current.childNodes[selectedTab].classList.add(styles.render)
      wrapperRef.current.childNodes[selectedTab].srcdoc = wrapperRef.current.childNodes[selectedTab].srcdoc
      wrapperRef.current.childNodes[selectedTab].classList.add("fade-in")
    }
    // toggle pre elements
    wrapperRef.current.childNodes[previousTab].style.display = "none"
    wrapperRef.current.childNodes[selectedTab].style.display = null
    // store tab that was modified
    setPreviousTab(selectedTab)
    // modify height of pre tag
    wrapperRef.current.style.display = null
    if (wrapperRef.current.childNodes[selectedTab].offsetHeight <= 200)
      setHeight(200)
    else if (wrapperRef.current.childNodes[selectedTab].offsetHeight < 500) 
      setHeight(wrapperRef.current.childNodes[selectedTab].offsetHeight)
    else 
      setHeight(500)
    wrapperRef.current.style.display = "flex"
  }, [selectedTab])

  return <>
    <style global="true">{`
      pre {
        color:${darkMode ? "white" : "black"}
      }
      ${!mobile && `
        pre::-webkit-scrollbar {
          width: 12.5px;
          height: 12.5px;
        }
        pre::-webkit-scrollbar-thumb {
          background-color: ${darkMode ? "rgba(255, 255, 255, 0.125)" : "rgba(0, 0, 0, 0.125)"};
          border-radius: 6.25px;
        }
        pre::-webkit-scrollbar-thumb:hover {
          background-color: ${darkMode ? "rgba(255, 255, 255, 0.175)" : "rgba(0, 0, 0, 0.175)"}
        }
        pre::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.125);
          border-radius: 6.25px;
          object-fit: fill;
        }
        pre::-webkit-scrollbar-corner {
          background-color: rgba(0, 0, 0, 0);
        }
        @media only screen and (max-width: 640px) {
          pre::-webkit-scrollbar {
            width: 6.25px;
            height: 6.25px;
          }
          pre::-webkit-scrollbar-thumb {
            border-radius: 3.125px
          }
          pre::-webkit-scrollbar-track {
            border-radius: 3.125px
          }
        }
      `}
      code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px} .hljs-keyword,.hljs-meta-keyword{font-weight:700}
      ${darkMode ? 
        `.hljs{color:#eff;background:#263238}.hljs ::selection{color:#314549}.hljs-comment{color:#546e7a}.hljs-tag{color:#b2ccd6}.hljs-operator,.hljs-punctuation,.hljs-subst{color:#eff}.hljs-operator{opacity:.7}.hljs-bullet,.hljs-deletion,.hljs-name,.hljs-selector-tag,.hljs-template-variable,.hljs-variable{color:#f07178}.hljs-attr,.hljs-link,.hljs-literal,.hljs-number,.hljs-symbol,.hljs-variable.constant_{color:#f78c6c}.hljs-class .hljs-title,.hljs-title,.hljs-title.class_{color:#ffcb6b}.hljs-strong{font-weight:700;color:#ffcb6b}.hljs-addition,.hljs-code,.hljs-string,.hljs-title.class_.inherited__{color:#c3e88d}.hljs-built_in,.hljs-doctag,.hljs-keyword.hljs-atrule,.hljs-quote,.hljs-regexp{color:#89ddff}.hljs-attribute,.hljs-function .hljs-title,.hljs-section,.hljs-title.function_,.ruby .hljs-property{color:#82aaff}.diff .hljs-meta,.hljs-keyword,.hljs-template-tag,.hljs-type{color:#c792ea}.hljs-emphasis{color:#c792ea;font-style:italic}.hljs-meta,.hljs-meta.hljs-keyword,.hljs-meta .hljs-string{color:#ff5370}.hljs-meta` 
        : 
        `.hljs{color:#373b41;background:#fff}.hljs ::selection{color:#c5c8c6}.hljs-comment{color:#b4b7b4}.hljs-tag{color:#969896}.hljs-operator,.hljs-punctuation,.hljs-subst{color:#373b41}.hljs-operator{opacity:.7}.hljs-bullet,.hljs-deletion,.hljs-name,.hljs-selector-tag,.hljs-template-variable,.hljs-variable{color:#cc342b}.hljs-attr,.hljs-link,.hljs-literal,.hljs-number,.hljs-symbol,.hljs-variable.constant_{color:#f96a38}.hljs-class .hljs-title,.hljs-title,.hljs-title.class_{color:#fba922}.hljs-strong{font-weight:700;color:#fba922}.hljs-addition,.hljs-code,.hljs-string,.hljs-title.class_.inherited__{color:#198844}.hljs-attribute,.hljs-built_in,.hljs-doctag,.hljs-function .hljs-title,.hljs-keyword.hljs-atrule,.hljs-quote,.hljs-regexp,.hljs-section,.hljs-title.function_,.ruby .hljs-property{color:#3971ed}.diff .hljs-meta,.hljs-keyword,.hljs-template-tag,.hljs-type{color:#a36ac7}.hljs-emphasis{color:#a36ac7;font-style:italic}.hljs-meta,.hljs-meta .hljs-keyword,.hljs-meta .hljs-string{color:#3971ed}.hljs-meta`
      }
    `}</style>
    <style jsx>{`
      .dark {
        background: #232526;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
      .light {
        background: #232526;  /* fallback for old browsers */
        background: radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgb(235, 243, 255) 100.2% );
      }
      .${styles.header} {
        ${darkMode ? "color: grey" : "color: black"}
      }
      .${styles.wrapper} {
        height: ${height}px
      }
    `}</style>
    <style global="true">{`
      .hljs-comment {
        color: grey
      }
    `}</style>
    <div className={`${styles.cardContainer} ${darkMode ? "dark" : "light"} animate-fade-in`} ref={containerRef}>
      <div className={`${styles.header} select-none`} ref={headerRef} />
      <div className={styles.wrapper} ref={wrapperRef} />
    </div>
  </>
}

export default CodeCard
