import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import styles from './App.module.scss'

const App = () => {

  const sortRef = useRef()
  const styleRef = useRef()
  const buttonsRef = useRef()

  const [state, setState] = useState(0)
  const [range, setRange] = useState(100)
  const [s] = useState({ "animation": undefined, "el": undefined, "range": undefined })

  // fix later
  const onChange = e => {
    // const stringify = e.target.value.toString()
    // if (stringify.length > 4 || stringify == "") return false
    setRange(e.target.value < 1000 ? e.target.value : 1000)
  }

  const swapNodes = (node1, node2) => {
    const afterNode2 = node2.nextElementSibling, parent = node2.parentNode
    node1.replaceWith(node2)
    parent.insertBefore(node1, afterNode2)
  }

  const triggerNode = n => n.replaceWith(n.cloneNode())
  
  const reset = x => {
    cancelAnimationFrame(s.animation)
    sortRef.current.innerHTML = ""
    styleRef.current.innerHTML = `
    @keyframes example {
      from {
        -webkit-filter: invert(100%);
        filter: invert(100%);
      }
      to {
        -webkit-filter: invert(0);
        filter: invert(0);
      }
    }
    .${styles.sort} > div {
      animation: example .5s linear;
    }
    `
    for (let i=0; i<x; i++) {
      const div = document.createElement("div")
      div.setAttribute("style", `height: ${Math.floor(Math.random() * 1001)/10}%`)
      sortRef.current.appendChild(div)
      styleRef.current.innerHTML += `.${styles.sort} > div:nth-of-type(${i+1}) {
        background-color: hsl(calc(360 / ${x} * ${i}), 100%, 50%);
      }`
    }
    s.range = range
    for (let node of buttonsRef.current.childNodes) {
      node.classList.remove(styles.disabled)
    }
    setState(0)
  }

  const bubbleSort = (p=[0,0]) => {
    if (p[0]+1 === +s.range - p[1]) p = [0, p[1]+1]
    if (+s.range - p[1] === 1) return true
    if (s.el[p[0]].offsetHeight > s.el[p[0]+1].offsetHeight)
      swapNodes(s.el[p[0]], s.el[p[0]+1])
    else 
      triggerNode(s.el[p[0]])
    p[0]++
    s.animation = requestAnimationFrame(() => bubbleSort(p))
  }

  const insertionSort = (p=[0,0]) => {
    if (p[1] === +s.range-1) return true
    if (s.el[p[0]].offsetHeight > s.el[p[0]+1].offsetHeight) {
      swapNodes(s.el[p[0]], s.el[p[0]+1]), p[0]--
      if (p[0] === -1) p = [p[1]+1, p[1]+1]
    } else { triggerNode(s.el[p[0]]), p = [p[1]+1, p[1]+1] }
    s.animation = requestAnimationFrame(() => insertionSort(p))
  }

  const merge = (left, right) => {
    let resultArray = [], leftIndex = 0, rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex][1] < right[rightIndex][1]) {
        resultArray.push(left[leftIndex]), leftIndex++
      } else {
        resultArray.push(right[rightIndex]), rightIndex++
      }
    }
    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex))
  }

  const mergeSort = a => {
    if (a.length <= 1) return a;
    const m = Math.floor(a.length/2), 
          l = a.slice(0, m),
          r = a.slice(m)
    return merge(mergeSort(l), mergeSort(r))
  }

  const quickSort = () => {
    console.log('quick sort')
    // s.animation = requestAnimationFrame(quickSort)
  }

  const play = () => {
    let selection
    for (let node of buttonsRef.current.childNodes) {
      if(!node.classList.contains(styles.selected)) {
        node.classList.add(styles.disabled)
      } else {
        selection = node.innerHTML
      }
    }
    setState(1)
    switch (selection) {
      case "Bubble Sort":
        bubbleSort()
        break;
      case "Insertion Sort":
        insertionSort()
        break;
      case "Merge Sort":
        mergeSort(Array.from(s.el).map((n, i) => [i, n.offsetHeight]))
        // const sortedNodes = 
        // for (let n of sortedNodes) console.log(s.el[n[0]]);
        break;
      case "Quick Sort":
        quickSort()
        break;
      default:
        break;
    }
  }

  const pause = () => {
    setState(2)
    cancelAnimationFrame(s.animation)
  }

  const toggleSelection = e => {
    if (!state && ! e.target.classList.contains(styles.disabled)) {
      buttonsRef.current.querySelector(`.${styles.selected}`).classList.remove(styles.selected)
      e.target.classList.add(styles.selected)
    }
  }

  useEffect(() => {
    reset(range)
    s.el = sortRef.current.childNodes
  }, [])

  return <>
    <Head>
      <title>Visual Sort</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossOrigin="anonymous" />
    </Head>
    <style ref={styleRef} global="true" />
    <div className={styles.app}>
      <div className={styles.app_container}>
        <div className={styles.sort_container}>
          <div className={styles.play}>
            {state === 0 && <i className="fas fa-play" onClick={play} />}
            {state === 1 && <i className="fas fa-pause" onClick={pause} />}
            {state === 2 && <i className="fas fa-redo-alt" onClick={play} />}
          </div>
          <div className={styles.sort} ref={sortRef} />
        </div>
        <div className={styles.input_container}>
          <input type="number" value={range} onChange={onChange} />
          {/* <input ref={inputRef} type="number" /> */}
          <div className={styles.btn} onClick={() => reset(range)}>Reset</div>
          <div ref={buttonsRef}>
            <div className={`${styles.btn} ${styles.selected}`} onClick={toggleSelection}>Bubble Sort</div>
            <div className={styles.btn} onClick={toggleSelection}>Insertion Sort</div>
            <div className={styles.btn} onClick={toggleSelection}>Merge Sort</div>
            <div className={styles.btn} onClick={toggleSelection}>Quick Sort</div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App