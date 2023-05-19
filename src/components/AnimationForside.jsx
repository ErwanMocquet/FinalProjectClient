import React, { useEffect, useState } from "react";
import "../css/AnimationForside.css";

export default function AnimationForside() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isAlreadyShown = sessionStorage.getItem("alreadyShow");
    if (isAlreadyShown !== "already shown") {
      const timeout = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("alreadyShow", "already shown");
      }, 4500);
      return () => clearTimeout(timeout);
    } else {
      setVisible(false);
    }
  }, []);
  
  return (
    <div className={`animated-div ${visible ? "visible" : "hidden"}`}>
      <h1 className="shine-effect text-animation line-up-1">
        PROVIDE BUSINESS - DATABASE
      </h1>
      <h2 className="text-animation line-up-2">Alle de oplysninger, du har brug for, på ét sted.</h2>
    </div>
  );
}
