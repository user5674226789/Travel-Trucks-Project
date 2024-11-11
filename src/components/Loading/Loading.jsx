import css from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={css.loadingContainer}>
      <div className={css.spinner}></div>
    </div>
  );
}
