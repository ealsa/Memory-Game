import { useEffect, useState } from "react";
import {
  getFormedData,
  getPairedPics,
  addUniqueID,
  cardShuffle,
} from "./getFormedData";

const MAX_VISIBLE_CARDS = 2;
const LEVELS = {
  easy: 1000,
  medium: 500,
  hard: 250,
};

const useGameLogic = (images, gameLevels) => {
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [score, setScore] = useState(0);
  const [isWin, setIsWin] = useState(false);

  const prepareCards = () => {
    const formedData = getFormedData(images);
    const pairPics = getPairedPics(formedData);
    const uniqueID = addUniqueID(pairPics);
    const shuffle = cardShuffle(uniqueID);
    setCards(shuffle);
  };

  const flipCard = (clickedCardId) => {
    const flippedCards = cards.map((card) => {
      if (card.uniqueId === clickedCardId) {
        card.isShown = true;
      }

      if (card.isShown) setVisibleCards((prev) => [...prev, card.uniqueId]);

      return card;
    });
    setCards(flippedCards);
  };

  const updateScore = () => {
    setScore((oldScore) => oldScore + 1);
  };

  const checkMatch = () => {
    const visible = cards.filter(
      (card) => visibleCards.indexOf(card.uniqueId) !== -1
    );
    const matched = visible[0].id === visible[1].id;

    const updatedCards = cards.map((card) => {
      if (visibleCards.indexOf(card.uniqueId) !== -1) {
        card.isShown = false;
        card.isFound = matched;
      }
      return card;
    });
    setTimeout(() => {
      setCards(updatedCards);
      setVisibleCards([]);
      if (matched) updateScore();
    }, LEVELS[gameLevels]);
  };

  const onCardClick = (clickedCardId) => {
    if (visibleCards.length < MAX_VISIBLE_CARDS) flipCard(clickedCardId);
  };

  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);

  useEffect(() => {
    if (visibleCards.length >= MAX_VISIBLE_CARDS) {
      checkMatch();
    }
  }, [visibleCards]);

  useEffect(() => {
    if (images.length && score === images.length) {
      setIsWin(true);
    }
  }, [score]);

  return { cards, onCardClick, isWin };
};

export default useGameLogic;
