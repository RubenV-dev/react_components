import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateBoxTS() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date:any) => {
        setSelectedDate(date);
    }

    return (
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd" 
          />
        </div>
      );

}

export default DateBoxTS;