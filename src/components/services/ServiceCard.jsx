import React from "react";
import "./ServiceCard.css";
import Zoom from "react-reveal/Zoom";

function ServiceCard({
  title,
  content,
  secTitle,
  secContent,
  imgURL,
  showImgFirst = false,
  showFullCard = false,
  showBgIllustration = false,
  children,
}) {
  return (
    <div
      className={`
        serviceCard 
        ${showImgFirst ? "imgFirst" : ""} 
        ${showFullCard ? "fullCard" : ""} 
        ${showBgIllustration ? "bgIllustration" : ""}
      `}
    >
      <Zoom>
        <div className="serviceCard__content">
          <h2>{title}</h2>

          <p>{content}</p>

          <>{children}</>

          {(secTitle || secContent) && (
            <div className="serviceCard__secContent">
              <h2>{secTitle}</h2>

              <p>{secContent}</p>
            </div>
          )}
        </div>

        <div className="serviceCard__img">
          <img src={imgURL} alt={title} />
        </div>
      </Zoom>
    </div>
  );
}

export default ServiceCard;
