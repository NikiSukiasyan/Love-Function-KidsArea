import React, { useState } from "react";
import LoveLogo from "../../images/Vector.svg";
import LoveLogoUnfield from "../../images/LoveLogo.png";
import "./Love.css";

function Love() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button className="love-btn" onClick={handleClick}>
      <img
        src={liked ? LoveLogo : LoveLogoUnfield}
        className={liked ? "heart" : "unfield"}
        alt="love"
      />
    </button>
  );
}

export default Love;
