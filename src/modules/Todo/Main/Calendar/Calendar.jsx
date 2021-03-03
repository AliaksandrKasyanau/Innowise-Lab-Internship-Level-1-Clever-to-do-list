import React from 'react'
import MonthSwitch from './MonthSwitch/MonthSwitch'
import DateSwitch from './DateSwitch/DateSwitch'
import './Calendar.scss'
import { useState } from 'react'

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  return (
    <div className="calendar">
      <MonthSwitch
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      <DateSwitch currentMonth={currentMonth} />
    </div>
  )
}
export default Calendar
