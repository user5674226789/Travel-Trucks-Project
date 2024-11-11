import React from "react";
import { Formik, Form, Field } from "formik";
import css from "./CatalogFilter.module.css";
import snippets from "../../assets/images/snippets.svg";
import clsx from "clsx";

export default function CatalogFilter({ onSubmitForm }) {
  const fullyIntegratedClasses = clsx(css.fieldBlock, css.minPadding);

  const Checkbox = ({ name, label, icon }) => (
    <label className={css.equipment}>
      <Field type="checkbox" name={name} className={css.eqField} />
      <span className={css.fieldBlock}>
        <svg className={css.blockIcon} width="32" height="32">
          <use href={`${snippets}#${icon}`}></use>
        </svg>
        <span className={css.blockName}>{label}</span>
      </span>
    </label>
  );

  const RadioButton = ({ name, value, label, icon, additionalClasses }) => (
    <label className={css.type}>
      <Field type="radio" name={name} value={value} className={css.typeField} />
      <span className={additionalClasses || css.fieldBlock}>
        <svg className={css.blockIcon} width="32" height="32">
          <use href={`${snippets}#${icon}`}></use>
        </svg>
        <span className={css.blockName}>{label}</span>
      </span>
    </label>
  );

  const cleanObject = (obj) => {
    let cleanedObj = { ...obj };

    if (cleanedObj.automatic === true) {
      delete cleanedObj.automatic;
      cleanedObj.transmission = "automatic";
    }

    cleanedObj = Object.fromEntries(
      Object.entries(cleanedObj).filter(
        ([_, v]) => v !== false && v !== ""
      )
    );

    return cleanedObj;
  };

  return (
    <Formik
      initialValues={{
        location: "",
        AC: false,
        kitchen: false,
        bathroom: false,
        TV: false,
        automatic: false,
        form: ""
      }}
      onSubmit={(values) => {
        const cleanedValues = cleanObject(values);
        onSubmitForm(cleanedValues);
      }}
    >
      {({ values }) => (
        <Form className={css.filterForm}>
          <div className={css.formGroup}>
            <label htmlFor="location">
              <span className={css.label}>Location:</span>
              <div className={css.inputWrapper}>
                <svg
                  className={`${css.icon} ${
                    values.location ? css.iconFilled : ""
                  }`}
                  width="20"
                  height="20"
                >
                  <use href={`${snippets}#icon-map`}></use>
                </svg>
                <Field
                  type="text"
                  id="location"
                  name="location"
                  placeholder="City"
                  className={css.inputLocation}
                />
              </div>
            </label>
          </div>

          <div className={css.filterName}>Filter</div>

          <div className={css.formGroup}>
            <h2 className={css.filterLabel}>Vehicle equipment</h2>
            <div className={css.checkboxGroup}>
              <Checkbox name="AC" label="AC" icon="icon-wind" />
              <Checkbox name="automatic" label="Automatic" icon="icon-diagram" />
              <Checkbox name="kitchen" label="Kitchen" icon="icon-cup-hot" />
              <Checkbox name="TV" label="TV" icon="icon-tv" />
              <Checkbox name="bathroom" label="Bathroom" icon="icon-shower" />
            </div>
          </div>

          <div className={css.formGroup}>
            <h2 className={css.filterLabel}>Vehicle type</h2>
            <div className={css.radioGroup}>
              <RadioButton
                name="form"
                value="panelTruck"
                label="Van"
                icon="icon-grid2"
              />
              <RadioButton
                name="form"
                value="fullyIntegrated"
                label="Fully Integrated"
                icon="icon-grid"
                additionalClasses={fullyIntegratedClasses}
              />
              <RadioButton
                name="form"
                value="alcove"
                label="Alcove"
                icon="icon-grid3"
              />
            </div>
          </div>

          <button type="submit" className={css.submitButton}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
}











