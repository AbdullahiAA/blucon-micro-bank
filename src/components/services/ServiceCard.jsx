import React from "react";
import "./ServiceCard.css";

function ServiceCard({
  title,
  content,
  imgURL,
  showImgFirst = false,
  showFullCard = false,
}) {
  return (
    <div
      className={`serviceCard ${showImgFirst ? "imgFirst" : ""} ${
        showFullCard ? "fullCard" : ""
      }`}
    >
      <div className="serviceCard__content">
        <h2>{title}</h2>

        <p>{content}</p>
      </div>

      <div className="serviceCard__img">
        <img src={imgURL} alt={title} />
      </div>
    </div>
  );
}

export default ServiceCard;
