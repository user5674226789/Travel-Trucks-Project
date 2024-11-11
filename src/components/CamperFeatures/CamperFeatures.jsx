import React from "react";
import { useOutletContext } from "react-router-dom";
import css from "./CamperFeatures.module.css";
import Features from "../Features/Features";

export default function CamperFeatures() {
  const { camper } = useOutletContext();

  if (!camper) {
    return <div>No camper details available</div>;
  }

  return (
    <div className={css.container}>
      <Features camper={camper} />

      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.info}>
        <li className={css.rowInfo}>
          <span>Form</span> <span>{camper.form}</span>
        </li>
        <li className={css.rowInfo}>
          <span>Length</span> <span>{camper.length}</span>
        </li>
        <li className={css.rowInfo}>
          <span>Width</span> <span>{camper.width}</span>
        </li>
        <li className={css.rowInfo}>
          <span>Height</span> <span>{camper.height}</span>
        </li>
        <li className={css.rowInfo}>
          <span>Tank</span> <span>{camper.tank}</span>
        </li>
        <li className={css.rowInfo}>
          <span>Consumption</span> <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
}















