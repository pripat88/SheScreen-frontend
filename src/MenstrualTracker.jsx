import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MenstrualTracker() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="form">
        <div className="form__content">
          <h2 className="form__title">Your Menstrual Tracker</h2>

          <div className="calendar">
            <Calendar
              onChange={onChange}
              value={value}
            />
          </div>

          <div className="tracker-info">
            <h3 className="form__subtitle">Cycle Information</h3>

            <input
              type="number"
              className="form__input"
              placeholder="Cycle Length"
              id="CycleLength"
              required
            />
            {/* ... */}
          </div>
        </div>
      </div>
    </>
  );
}