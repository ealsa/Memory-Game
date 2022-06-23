import React from "react";
import Image from "./Image";
import classes from "./Card.module.css";

const Card = ({ card, onCardClick }) => {
  const onClick = () => {
    if (card.isShown || card.isFound) return;
    onCardClick(card.uniqueId);
  };

  return (
    <div className={`${classes.container}`} onClick={onClick}>
      <div className={`${classes.card} ${card.isShown ? classes.flipped : ""}`}>
        <div
          className={`${classes.front} ${card.isFound ? classes.found : ""}`}
        ></div>
        <div className={`${classes.back}`}>
          <Image url={card.url} />
        </div>
      </div>
    </div>
  );
};

export default Card;
