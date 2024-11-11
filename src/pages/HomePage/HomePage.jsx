import React from "react";
import { NavLink } from "react-router-dom";

import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <div className="mainContainer">
        <div className={css.container}>
          <div className={css.content}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.text}>You can find everything you want in our catalog</p>
          </div>
          <NavLink to="/catalog" className="btn">
            View Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}






