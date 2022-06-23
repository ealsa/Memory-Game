import React from "react";
import classes from "./Result.module.css";

const Result = ({ restartGame }) => {
  return (
    <div className={`${classes.container}`}>
      <p>AWESOME!</p>
      <button className={`${classes.button}`} onClick={restartGame}>
        Finish Game
      </button>
    </div>
  );
};

export default Result;
