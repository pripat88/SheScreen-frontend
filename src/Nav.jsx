//import "./main.css"; CHANGE
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation_icon">&nbsp;</span>
        <p className="navigation__button--text">Menu</p>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" reloadDocument={true} className="navigation__link">
              <span>Home</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/AboutUs"
              reloadDocument={true}
              className="navigation__link"
            >
              <span>About Us</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/Signup"
              reloadDocument={true}
              className="navigation__link"
            >
              <span>Sign Up</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/Login"
              reloadDocument={true}
              className="navigation__link"
            >
              <span>Login</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/BreastExam"
              reloadDocument={true}
              className="navigation__link"
            >
              <span>Breast Exam</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/CancerScreenings"
              reloadDocument={true}
              className="navigation__link"
            >
              <span>Cancer Screenings</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/STDsSTIs"
              reloadDocument={true}
              className="navigation__link"
            >
              <span>STD/STI Screenings</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/MenstrualTracker"
              reloadDocument={true}
              className="navigation__link"
            >
              <span>Menstrual Tracker</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
