import React from 'react'
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'
import '../App.css';

const Scheduler = () => {

    let data = [
        {
            Id: 1,
            Subject: 'Meeting - 1',
            StartTime: new Date(2023, 1, 15, 10, 0),
            EndTime: new Date(2023, 1, 16, 12, 30),
            IsAllDay: false
        },
    ];
    
  return (
    <div className='scheduler'>
      <ScheduleComponent currentView='Month' 
      eventSettings={{dataSource: data}}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  )
}

export default Scheduler;
