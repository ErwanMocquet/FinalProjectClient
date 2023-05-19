import React, { useState } from "react";
import Streamlined1 from "../img/streamlined-process-1.png";
import Streamlined2 from "../img/streamlined-process-2.png";

export default function StreamlinedProcess() {
  const [currentImage, setCurrentImage] = useState(Streamlined1);

  const handleButtonClick = (newImage) => {
    setCurrentImage(newImage);
  };

  return (
    <section className="streamlined-cont">
      <div>
        <button
          onClick={() => handleButtonClick(Streamlined1)}
          className={currentImage === Streamlined1 ? 'button-pbdb-active' : 'button-pbdb'}
        >
          WITH PROVIDE BUSINESS
        </button>
        <button
          onClick={() => handleButtonClick(Streamlined2)}
          className={currentImage === Streamlined2 ? 'button-pbdb-active' : 'button-pbdb'}
        >
          WITHOUT PROVIDE BUSINESS
        </button>
      </div>
      <img src={currentImage} alt="Streamlined process Provide Business" className="image-streamlined"/>
    </section>
  );
}
