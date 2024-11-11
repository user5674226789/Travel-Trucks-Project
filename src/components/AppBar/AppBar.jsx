import React from "react";

import Navigation from "../Navigation/Navigation";

import css from "./AppBar.module.css";
import logo from "../../assets/images/logo.svg"
import { NavLink } from "react-router-dom";

export default function AppBar () {

  return (
    <header className={css.appBar}>
      <div className="mainContainer">
        <div className={css.headerContainer}>
          <NavLink to="/" className={css.logo}>
            <img src={logo} alt="logo" width="136" height="16" />
          </NavLink>
          <Navigation />
        </div>
      </div>
    </header>
  );
};



