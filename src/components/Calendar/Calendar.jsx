import MonthSwitch from './MonthSwitch/MonthSwitch';
import DateSwitch from './DateSwitch/DateSwitch';
import './Calendar.scss'
import { useState } from 'react';

function Calendar() {  
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <div className="calendar">
      <div className="container">
      <MonthSwitch currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>
      <DateSwitch currentMonth={currentMonth}/>
        </div>
    </div>
  );
}
export default Calendar;
