import React, { useState, useEffect } from "react";
import useGetImages from "./../hooks/useGetImages";
import "./Board.css";
import { PropTypes } from "prop-types";
import LoaderContainer from "./Loader";
import useGameLogic from "../hooks/useGameLogic";
import Card from "./Card";
import Result from "./Result";

const Board = ({ gameOptions, restartGame }) => {
  const [isLoading, setIsLoading] = useState(true);
  const images = useGetImages(gameOptions);
  const { cards, onCardClick, isWin } = useGameLogic(images, gameOptions.level);

  useEffect(() => {
    if (images.length > 0) setIsLoading(false);
  }, [images]);

  return (
    <div>
      {isWin && <Result restartGame={restartGame} />}
      <div className="game-page">
        {isLoading ? (
          <LoaderContainer />
        ) : (
          cards.map((card) => (
            <Card onCardClick={onCardClick} key={card.uniqueId} card={card}>
              {card.uniqueId}
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Board;

Board.propTypes = {
  gameOptions: PropTypes.shape({
    level: PropTypes.string.isRequired,
    cardAmount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }),
};
