import React, { useContext, useEffect, useState } from 'react';
import './DateSwitch.scss';
import { format, addDays, startOfMonth, isSameDay, lastDayOfMonth, getDate } from 'date-fns';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { DaysContext } from '../../../../providers/DaysProvider';

function DateSwitch({ currentMonth }) {
  const [day, setDay] = useContext(DaysContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const scrollToDate = () => {
    let selectedDay = document.querySelector('.selected');
    selectedDay.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    return scrollToDate();
  }, []);

  if (!isSameDay(new Date(day), selectedDate) && day !== null) {
    setSelectedDate(new Date(day));
  }
  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const startDate = startOfMonth(monthStart);
    const lastDayOfThisMonth = getDate(lastDayOfMonth(currentMonth));

    const dateFormat = 'd';
    const dayFormat = 'eee';

    let days = [];
    let day = startDate;
    let formattedDate = '';

    const onDateClick = (day) => {
      setSelectedDate(day);
      setDay(format(day, 'dd MMMM yyyy'));
    };

    for (let i = 0; i < lastDayOfThisMonth; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className={`day ${isSameDay(day, selectedDate) ? 'selected' : ''}`}
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

  return (
    <ScrollMenu
      alignCenter={false}
      scrollToSelected={true}
      data={renderCells()}
      menuStyle={false}
    />
  );
}
export default DateSwitch;
