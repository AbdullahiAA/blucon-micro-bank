import React from "react";
import "./ServiceCard.css";
import Zoom from "react-reveal/Zoom";

function ServiceCard({
  className = "",
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
        ${className}
      `}
    >
      {/* {(title || content) && (
        <div className="serviceCard__content">
          <h2>{title}</h2>

          <p>{content}</p>

          {(secTitle || secContent) && (
            <div className="serviceCard__secContent">
              <h2>{secTitle}</h2>

              <p>{secContent}</p>
            </div>
          )}
        </div>
      )} */}

      <>
        <Zoom>{children}</Zoom>
      </>

      <div className="serviceCard__img">
        <Zoom>
          <img src={imgURL} alt={title} />
        </Zoom>
      </div>
    </div>
  );
}

export default ServiceCard;
