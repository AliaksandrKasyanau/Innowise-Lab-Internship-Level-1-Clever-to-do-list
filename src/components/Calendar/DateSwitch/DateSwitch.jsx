import React, { useState } from 'react';
import './DateSwitch.scss';
import { format, addDays, startOfMonth, isSameDay, lastDayOfMonth, getDate } from 'date-fns';
import ScrollMenu from 'react-horizontal-scrolling-menu';

function DateSwitch({currentMonth}) {
  // const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const startDate = startOfMonth(monthStart);
    const lastDayOfThisMonth = getDate(lastDayOfMonth(currentMonth));

    const dateFormat = 'd';
    const dayFormat = 'eee';

    let days = [];
    let day = startDate;
    let formattedDate = '';

    for (let i = 0; i < lastDayOfThisMonth; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={`col ${isSameDay(day, selectedDate) ? 'selected' : ''}`}
          key={day}
          onClick={() => onDateClick(cloneDay)}
        >
          <span className="number">{formattedDate}</span>
          <div className="days">{format(day, dayFormat)}</div>
        </div>
      );
      day = addDays(day, 1);
    }
    return days;
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };
  return <ScrollMenu alignCenter={false} data={renderCells()}/>;
}
export default DateSwitch;
