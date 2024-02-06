import React from "react";

export default function About() {
  return (
    <div className="about">
      <h1 className="about__heading--main">About Us</h1>
      <ul className="detail">
        <li className="description">
        She Screen is a woman's companion...
        </li>
        <h2 className="about__heading--sub">Our Mission</h2>
        <li className="description__secondary">
          INFO HERE
        </li>
        <h2 className="about__heading--sub">How It Works</h2>
        <li className="description__secondary">
          info here
        </li>
        <li className="description__tertiary">
          Download She Screen today
        </li>

        <li className="description__tertiary">
          Tailored for Women. Powered by You.
        </li>
        <div className="about-button">
          <a href="./SignupForm" className="about-button__click">
            Sign Up Today!
          </a>
        </div>
      </ul>
    </div>
  );
}
