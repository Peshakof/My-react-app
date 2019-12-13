import React from 'react';

const Calendar = ({className, name}) => {
  return(
    <input className={className} name={name} type="date"></input>
  )
}

export default Calendar;