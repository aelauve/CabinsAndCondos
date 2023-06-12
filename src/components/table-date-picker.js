import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker() {
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());

 return (
    <>
        <div className="search-field">
            {/* <div className="search-field-text search-bar-font-style"> */}
                <DatePicker
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={date => setStartDate(date)}
                    className="search-field-text search-bar-font-style"
                />
            {/* </div> */}
        </div>

        <div className="search-field">
            {/* <div className="search-field-text search-bar-font-style"> */}
                <DatePicker
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={date => setEndDate(date)}
                    className="search-field-text search-bar-font-style"
                />
            {/* </div> */}
        </div>
    </>
 );
}