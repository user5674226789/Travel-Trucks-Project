import React from "react";
import css from "./ReviewCard.module.css";
import snippets from "../../assets/images/snippets.svg";

export default function ReviewCard({ review }) {
  const avatarLetter = review.reviewer_name
    ? review.reviewer_name.charAt(0).toUpperCase()
    : "";
  const rating = review.reviewer_rating;

  // Create an array for the stars, filled or empty based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <>
      <div className={css.itemHeader}>
        <div className={css.avatar}>{avatarLetter}</div>

        <div className={css.reviewInfo}>
          <span className={css.name}>{review.reviewer_name}</span>
          <div className={css.rating}>
            {stars.map((filled, index) => (
              <svg
                key={index}
                className={`${css.icon} ${filled ? css.filled : ""}`}
                width="16"
                height="16"
              >
                <use href={`${snippets}#icon-star`}></use>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className={css.comment}>{review.comment}</p>
    </>
  );
}
