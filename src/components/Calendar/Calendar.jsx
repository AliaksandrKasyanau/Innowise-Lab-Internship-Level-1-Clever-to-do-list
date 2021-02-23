import MonthSwitch from './MonthSwitch/MonthSwitch';
import DateSwitch from './DateSwitch/DateSwitch';
import './Calendar.scss'

function Calendar() {
  
  return (
    <div className="calendar">
      <div className="container">
      <MonthSwitch/>
      <DateSwitch/>
        </div>
    </div>
  );
}
export default Calendar;
