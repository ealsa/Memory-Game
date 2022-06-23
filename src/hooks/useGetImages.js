import { useState, useEffect } from "react";

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const useGetImages = (gameOptions) => {
  const [images, setImages] = useState([]);

  const buildUrl = () => {
    let url = new URL("https://api.pexels.com/v1/search");

    url.search = new URLSearchParams({
      query: gameOptions.category,
      orientation: "square",
      size: "small",
      per_page: gameOptions.cardAmount / 2,
      page: getRandomPage(),
    });
    return url;
  };
  const fetchPhotos = async () => {
    const response = await fetch(buildUrl(), {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    });
    const photos = await response.json();
    setImages(photos.photos);
  };

  useEffect(() => {
    if (!gameOptions) return;
    fetchPhotos();
  }, [gameOptions]);

  return images;
};

export default useGetImages;
