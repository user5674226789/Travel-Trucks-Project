import React from "react";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>
          404
        </h1>
        <h5 className={css.subtitle}>
          Page Not Found
        </h5>
        <p className={css.description}>
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
