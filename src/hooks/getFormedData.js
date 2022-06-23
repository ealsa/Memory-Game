export const getFormedData = (data) => {
  return data.map((pic, index) => ({
    id: index,
    url: pic.src.small,
    isShown: false,
    isFound: false,
  }));
};

export const getPairedPics = (data) => {
  return data.reduce((img, i) => img.concat(i, i), []);
};

export const addUniqueID = (data) => {
  return data.map((entry, i) => ({
    ...entry,
    uniqueId: i,
  }));
};

export const cardShuffle = (cards) => {
  let m = cards.length;
  let t;
  let i;

  while (m) {
    // pick a remaining element
    i = Math.floor(Math.random() * m--);

    // swap it with the current
    t = cards[m];
    cards[m] = cards[i];
    cards[i] = t;
  }

  return cards;
};
