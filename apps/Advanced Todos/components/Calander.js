import { useState, useEffect, useRef } from "react"
import styles from '../styles/Calander.module.scss'

// return an object with month infomation ( month: (0-11), year: xxxx ) 
const getMonth = (month, year) => {
  return { month, year, start: new Date(year, month, 1).getDay(), days: new Date(year, month+1, 0).getDate() }
}

// ^ takes a month object created w/ getMonth() + desired shift value 
const shiftMonth = (month, shift) => {
  shift += month.month 
  let years = Math.floor(shift / 12)
  return getMonth(shift - years * 12, month.year + years)
}

// used only within dateDiffernce function below
const parseDate = str => {
  let mdy = str.split('/')
  return new Date(mdy[2], mdy[0]-1, mdy[1])
}

// return integer difference of days between 2 dates from format ("mm/dd,yyyy", "mm/dd,yyyy") 
const dateDifference = (first, second) => {
  return Math.round((parseDate(second)-parseDate(first))/(1000*60*60*24))
}

const configureColor = (div, event, f) => {
  if (event.amount > 0) div.classList.add(styles.green)
  else if (event.amount < 0) div.classList.add(styles.red)
  else div.classList.add(styles.todo)
  div.addEventListener("click", () => f(true))
}

const parseCalanderData = (data, div, i, month, year, f) => {
  for (let event of data) {
    const minDate = event.start ? new Date(event.start) : 0
    const maxDate = event.stop ? new Date(event.stop) : new Date(8640000000000000)
    const currentDate = new Date(`${month}/${i}/${year}`)
    if (currentDate >= minDate && currentDate <= maxDate) {
      if (event.start) {
        if (!event.recurring && event.start === `${month}/${i}/${year}`) configureColor(div, event, f) 
        else if (event.recurring === 'daily') {
          configureColor(div, event, f)
        } else {
          const eventStart = event.start.split('/')
          if (event.recurring === 'weekly') {
            if (dateDifference(event.start, `${month}/${i}/${year}`) % 7 === 0) configureColor(div, event, f)
          }
          else if (event.recurring === 'biweekly') {
            if (dateDifference(event.start, `${month}/${i}/${year}`) % 14 === 0) configureColor(div, event, f)
          }
          else if (event.recurring === 'monthly') {
            if (i === +eventStart[1]) configureColor(div, event, f)
          }
          else if (event.recurring === 'yearly') {
            if ((i === +eventStart[1]) && (month === +eventStart[0])) configureColor(div, event, f)
          }
        }
      }
    }
  }
} 

const Calander = ({ transactions, todos, setModal }) => {

  const [date] = useState(new Date())
  const [currentMonth, setCurrentMonth] = useState(getMonth(date.getMonth(), date.getFullYear()))
  const [previousMonth, setPreviousMonth] = useState(shiftMonth(currentMonth, -1))
  const calanderGridRef = useRef()

  const generateCalanderDiv = (div, i, month, year) => {
    month++
    if (month === 13) {
      month = 1
      year++
    }
    if (currentMonth.month+1 !== month) div.classList.add(styles.other_month)
    parseCalanderData(transactions, div, i, month, year, setModal)
    parseCalanderData(todos, div, i, month, year, setModal)
    div.innerHTML = i
  }

  useEffect(() => {
    calanderGridRef.current.innerHTML = ""
    const start = -currentMonth.start+1
    for (let i=start; i<42+start; i++) {
      const div = document.createElement("div")
      if (i < 1) generateCalanderDiv(div, previousMonth.days+i, previousMonth.month, previousMonth.year)
      else if (i <= currentMonth.days) generateCalanderDiv(div, i, currentMonth.month, currentMonth.year)
      else generateCalanderDiv(div, i - currentMonth.days, currentMonth.month+1, currentMonth.year)
      calanderGridRef.current.appendChild(div)
    }
  }, [currentMonth])

  useEffect(() => {
    // setPreviousMonth(shiftMonth(currentMonth, 1))
    // setCurrentMonth(shiftMonth(currentMonth, 2))
  }, [])

  return <>
    <div className={styles.calander_container}>
      <div className={styles.days_container}>
        <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
      </div>
      <div className={styles.grid_container} ref={calanderGridRef} />
    </div>
  </>
}

export default Calander
