import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to our Health Tracker</h1>
      <p>Select an option below:</p>

      <div className="options">
        <Link to="/cancer-screenings" className="option">
          Cancer Screenings
        </Link>

        <Link to="/breast-exam" className="option">
          Breast Exam
        </Link>

        <Link to="/menstrual-tracker" className="option">
          Menstrual Tracker
        </Link>

        <Link to="/stds-stis" className="option">
          STDs/STIs
        </Link>
      </div>
    </div>
  );
}