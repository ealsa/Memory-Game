import React, { useState } from "react";
import "./SettingStyles.css";
// import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { CATEGORIES, LEVELS, AMOUNT } from "./SettingsData";
import RadioBox from "./RadioBox";
import Counter from "./Counter";

import { PropTypes } from "prop-types";

const Settings = ({ startGame }) => {
  const [level, setLevel] = useState(LEVELS[0]);
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [cardAmount, setCardAmount] = useState(AMOUNT);

  const onStartGameClick = () => {
    startGame({ category, level, cardAmount });
  };

  return (
    <div>
      <div className="setting-container">
        <h1 className="settings-h1">Settings</h1>
        <div className="category-bg">
          <h2 className="cat-h2">Category</h2>
          <div className="setting-category">
            {CATEGORIES.map((item) => {
              return (
                <RadioBox
                  key={item}
                  name={item}
                  selectedItem={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              );
            })}
          </div>
        </div>

        <div className="category-bg">
          <h2 className="card-amount-h2">Amount of cards</h2>

          <div className="amount-section">
            <Counter cardsCount={cardAmount} onClick={setCardAmount} />
          </div>
        </div>

        <div className="category-bg">
          <h2 className="cat-h2">Choose a level</h2>
          <div className="setting-category">
            {LEVELS.map((item) => {
              return (
                <RadioBox
                  key={item}
                  name={item}
                  selectedItem={level}
                  onChange={(e) => setLevel(e.target.value)}
                />
              );
            })}
          </div>
        </div>
        <button className="start-btn" onClick={onStartGameClick}>
          START
        </button>
      </div>
    </div>
  );
};

export default Settings;

Settings.propTypes = {
  startGame: PropTypes.func.isRequired,
};
