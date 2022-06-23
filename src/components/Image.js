import React from "react";

const Image = ({ url }) => {
  return (
    <div>
      <img src={url} alt="No Cheating :)" width="200" />
    </div>
  );
};

export default Image;
