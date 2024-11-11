import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-hot-toast";

import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  date: Yup.date().required("Date is required"),
  comment: Yup.string()
});

const initialValues = {
  name: "",
  email: "",
  date: null,
  comment: ""
};

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  toast.success("Message sent successfully!");
  resetForm();
};

export default function ContactForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.form}>
          <div className={css.field}>
            <Field
              id="name"
              name="name"
              type="text"
              className={css.input}
              placeholder="Name*"
              required
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.field}>
            <Field
              id="email"
              name="email"
              type="email"
              className={css.input}
              placeholder="Email*"
              required
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.field}>
            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue("date", date)}
              className={css.input}
              placeholderText="Booking date*"
              dateFormat="yyyy/MM/dd"
              required
            />
            <ErrorMessage name="date" component="div" className={css.error} />
          </div>

          <div className={css.field}>
            <Field
              as="textarea"
              id="comment"
              name="comment"
              className={css.textarea}
              placeholder="Comment"
            />
          </div>

          <button type="submit" className={css.submitButton}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}






