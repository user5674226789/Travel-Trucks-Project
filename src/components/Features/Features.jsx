import React from "react";
import css from "./Features.module.css";
import snippets from "../../assets/images/snippets.svg";

export default function Features({ camper }) {
  const features = [
    { name: camper.transmission, icon: "icon-diagram", value: true },
    { name: camper.engine, icon: "icon-fuel-pump", value: true },
    { name: "AC", icon: "icon-wind", value: camper.AC },
    { name: "Bathroom", icon: "icon-shower", value: camper.bathroom },
    { name: "Kitchen", icon: "icon-cup-hot", value: camper.kitchen },
    { name: "TV", icon: "icon-tv", value: camper.TV },
    { name: "Radio", icon: "icon-radios", value: camper.radio },
    { name: "Refrigerator", icon: "icon-fridge", value: camper.refrigerator },
    { name: "Microwave", icon: "icon-microwave", value: camper.microwave },
    { name: "Gas", icon: "icon-gas-stove", value: camper.gas },
    { name: "Water", icon: "icon-water", value: camper.water }
  ];

  return (
    <div className={css.featuresContainer}>
      {features.map(
        (feature, index) =>
          feature.value && (
            <div key={index} className={css.feature}>
              <svg className={css.icon} width="24" height="24">
                <use href={`${snippets}#${feature.icon}`}></use>
              </svg>
              <span>{feature.name}</span>
            </div>
          )
      )}
    </div>
  );
}
