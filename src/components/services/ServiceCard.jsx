import React from "react";
import "./ServiceCard.css";

function ServiceCard({
  title,
  content,
  secTitle,
  secContent,
  imgURL,
  showImgFirst = false,
  showFullCard = false,
  showBgIllustration = false,
}) {
  return (
    <div
      className={`serviceCard ${showImgFirst ? "imgFirst" : ""} ${
        showFullCard ? "fullCard" : ""
      } ${showBgIllustration ? "bgIllustration" : ""}`}
    >
      <div className="serviceCard__content">
        <h2>{title}</h2>

        <p>{content}</p>

        {secTitle && secContent && (
          <div className="serviceCard__secContent">
            <h2>{secTitle}</h2>

            <p>{secContent}</p>
          </div>
        )}
      </div>

      <div className="serviceCard__img">
        <img src={imgURL} alt={title} />
      </div>
    </div>
  );
}

export default ServiceCard;
