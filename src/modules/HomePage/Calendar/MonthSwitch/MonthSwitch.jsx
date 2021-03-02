import React from 'react'
import './MonthSwitch.scss'
import { format, addMonths, subMonths } from 'date-fns'

function MonthSwitch({ currentMonth, setCurrentMonth }) {
  const dateFormat = 'MMMM yyyy'
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }
  return (
    <div className="month-wrapper">
      <div className="arrow">
        <div className="icon" onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div>
        <span>{format(currentMonth, dateFormat)}</span>
      </div>
      <div className="arrow" onClick={nextMonth}>
        <div className="icon">chevron_right</div>
      </div>
    </div>
  )
}
export default MonthSwitch
