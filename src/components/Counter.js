import React from "react";
import { PropTypes } from "prop-types";

const STEP = 2;

const Counter = ({ cardsCount, onClick }) => {
  const onDecrement = () => {
    const number = cardsCount - STEP;
    if (number >= 2) onClick(number);
  };
  const onIncrement = () => {
    const number = cardsCount + STEP;
    if (number <= 24) onClick(number);
  };

  return (
    <div>
      <button className="amount-btn" onClick={onDecrement}>
        -
      </button>
      <span className="card-amount">{cardsCount}</span>
      <button className="amount-btn" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  cardsCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
