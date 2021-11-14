import { useState, useEffect, useContext, useCallback } from "react";
import moment from "moment";

// context
import _appContext from "../../../context/_appContext";

// styles
import styles from "../styles/Calander.module.scss";

const Calander = ({ transactions, todos, setModal, setDataPoints }) => {
  const [days, setDays] = useState([]),
    [daysObjects, setDaysObjects] = useState({}),
    { darkMode } = useContext(_appContext),
    openModal = useCallback(() => {}, [days]),
    daysInMonth = useCallback(
      (month, year) => new Date(year, month + 1, 0).getDate(),
      []
    ),
    firstDay = useCallback(
      (month, year) => new Date(year, month, 1).getDay(),
      []
    ),
    generateDay = useCallback(
      (date, year, month, day, i, generateData = false) => {
        const dataPoints = generateData ? [] : undefined;
        daysObjects[i] = { value: 0, objects: [], styles: {} };
        if (month === -1) {
          month = 11;
          year--;
        } else if (month === 12) {
          month = 0;
          year++;
        }
        if (date.getMonth() !== month) daysObjects[i]["styles"]["alt"] = true;
        for (let obj of [transactions, todos]) {
          const objType = obj === transactions ? "transactions" : "todos";
          for (let key of Object.keys(obj)) {
            if (obj[key].start) {
              const start = moment(obj[key].start, "YYYY-M-D"),
                current = moment(`${year}-${month + 1}-${day}`, "YYYY-M-D"),
                diff = current.diff(start, "days"),
                frequency = obj[key].frequency;
              if (current.isSameOrAfter(start)) {
                const flag = false;
                if (obj[key].stop) {
                  const stop = moment(obj[key].stop, "YYYY-M-D");
                  if (!current.isSameOrBefore(stop)) flag = true;
                }
                if (flag === false) {
                  if (frequency === "exact date") {
                    if (diff === 0) {
                      flag = true;
                    }
                  } else if (frequency === "daily") flag = true;
                  else if (frequency === "weekly") {
                    if (diff % 7 === 0) flag = true;
                  } else if (frequency === "biweekly") {
                    if (diff % 14 === 0) flag = true;
                  } else if (frequency === "monthly") {
                    if (start._i.split("-")[2] <= current.daysInMonth()) {
                      if (current._i.split("-")[2] === start._i.split("-")[2])
                        flag = true;
                    } else {
                      if (current._i.split("-")[2] == current.daysInMonth())
                        flag = true;
                    }
                  }
                  if (flag) {
                    if (objType === "todos")
                      daysObjects[i]["styles"]["todo"] = true;
                    if (generateData) dataPoints.push(+obj[key].amount);
                    daysObjects[i].value += +obj[key].amount;
                  }
                }
              }
            }
          }
        }
        if (daysObjects[i].value > 0) daysObjects[i]["styles"]["green"] = true;
        else if (daysObjects[i].value < 0)
          daysObjects[i]["styles"]["red"] = true;
        return [day, daysObjects[i].objects, daysObjects[i].styles, dataPoints];
      },
      [transactions, todos, setDataPoints]
    ),
    generateDays = useCallback(() => {
      setDaysObjects({});
      let days = [],
        dataPoints = [],
        daysLength,
        date = new Date();
      for (
        let i = 0;
        i < daysInMonth(date.getMonth(), date.getFullYear());
        i++
      ) {
        days.push(
          generateDay(date, date.getFullYear(), date.getMonth(), i + 1, i, true)
        );
        dataPoints.push(days[i][3]);
      }
      setDataPoints(dataPoints);
      for (let i = firstDay(date.getMonth(), date.getFullYear()); i > 0; i--)
        days.unshift(
          generateDay(
            date,
            date.getFullYear(),
            date.getMonth() - 1,
            daysInMonth(date.getMonth() - 1, date.getFullYear()) - i + 1,
            0 - i
          )
        );
      daysLength = days.length;
      for (let i = daysLength; i < 42; i++)
        days.push(
          generateDay(
            date,
            date.getFullYear(),
            date.getMonth() + 1,
            i - daysLength + 1,
            i - 1
          )
        );
      return days; // [[i, [object, object, ...], {styles}, [dataPoint, ...]], ...]
    }, [
      daysInMonth,
      firstDay,
      transactions,
      todos,
      generateDay,
      setDaysObjects,
      setDataPoints,
    ]),
    calculateStyles = useCallback((obj) => {
      if (obj.green) return styles.green;
      if (obj.red) return styles.red;
      if (obj.todo) return styles.todo;
      if (obj.alt) return styles.alt;
      return "";
    }, []);

  useEffect(() => setDays(generateDays()), [transactions, todos]);

  return (
    <>
      <div
        className={`${styles.calander_container} ${
          darkMode ? styles.dark : styles.light
        } select-none flex flex-1 flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-700 dark:text-gray-400 border dark:dark:border-gray-700`}
      >
        <div
          className={`${styles.days_container} flex bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700`}
        >
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className={styles.grid_container}>
          {days.map((data, i) => (
            <div
              key={i}
              className={calculateStyles(data[2])}
              onClick={openModal}
            >
              {data[0]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calander;
