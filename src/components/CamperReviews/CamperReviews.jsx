import React from "react";
import { useOutletContext } from "react-router-dom";

import css from "./CamperReviews.module.css";
import ReviewCard from "../ReviewCard/ReviewCard";

export default function CamperReviews() {
  const { camper } = useOutletContext();

  if (!camper) {
    return <div>No camper details available</div>;
  }

  const reviews = camper.reviews || [];

  return (
    <ul className={css.reviewList}>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <li key={index} className={css.reviewItem}>
            <ReviewCard review={review} />
          </li>
        ))
      ) : (
        <li>No reviews available</li>
      )}
    </ul>
  );
}
