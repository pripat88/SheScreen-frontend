// import "./main.css"; CHANGE THIS CSS TO THE NEW CSS FOR THE OPTIONS PAGE WHEN one is made
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="row">
      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front">
            <img src="/src/assets/breast_cancer.png" alt="Breast Cancer Image" />
          <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--1">
                Breast Exam
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front">
            <img src="/src/assets/gynecological.png" alt="Cancer Screenings Image" />
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--2">
                Cancer Screenings
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front">
            <img src="/src/assets/sti_screen.png" alt="STD/STI Screening Image" />
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--2">
                STD/STI Screenings
              </span>
            </h4>
          </div>
        </div>
      </div>

      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front">
            <img src="/src/assets/menstrual_tracker.png" alt="Menstrual Tracker Image" />
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--3">
                Menstrual Tracker
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
