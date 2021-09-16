import { useState, useEffect, useCallback, useRef } from "react"
import 'highlight.js/styles/base16/material.css'; 
import styles from '../styles/CodeCard.module.scss'
import hljs from 'highlight.js';

const CodeCard = ({ data }) => {

  const [height, setHeight] = useState(200)
  const [previousTab, setPreviousTab] = useState(0)
  const [selectedTab, setSelectedTab] = useState(0)
  const containerRef = useRef()
  const wrapperRef = useRef()
  const headerRef = useRef()

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
            code.push(`<script defer>${value}</script>`)
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
    let count = 0
    for (let [key, value] of Object.entries(data)) {

      let deconstruct = key.split(" ")
      
      const [style, language, extraStyle] = deconstructLanguage(deconstruct[0])
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
        div.setAttribute("data", count)
        div.addEventListener("click", () => {setSelectedTab(parseInt(div.getAttribute("data")))})
        headerRef.current.appendChild(div)
        
        // generate tabs content
        if (iframe) wrapperRef.current.appendChild(iframe)
        else {
          const pre = document.createElement('pre')
          pre.style.display = "none"
          if (extraStyle) pre.classList.add(styles[extraStyle])
          pre.innerHTML = language ? hljs.highlight(value, { language }).value : value
          wrapperRef.current.appendChild(pre)
        }
      }
      count++
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
    <style jsx>{`
      .${styles.wrapper} {
        height: ${height}px
      }
    `}</style>
    <style global="true">{`
      .hljs-comment {
        color: grey;
      }
    `}</style>
    <div className={`${styles.cardContainer} animate-fade-in`} ref={containerRef}>
      <div className={`${styles.header} select-none`} ref={headerRef} />
      <div className={styles.wrapper} ref={wrapperRef} />
    </div>
  </>
}

export default CodeCard
