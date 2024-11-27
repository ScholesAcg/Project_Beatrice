import React from "react";
import { cell } from "./style";

const EnterGridCell = ({ index, isClicked, onClick }) => {
  
  return (
    <div
      style={{
        ...cell,
        height: "60px",
        borderRadius: "6px",
        transform: isClicked ? "scale(0.9)" : "scale(1)", // 縮放動畫
        transition: "transform 0.2s ease", // 動畫過渡效果
        fontSize: "1rem",
      }}
      onClick={onClick}
    >
      Enter
    </div>
  );
};

export default EnterGridCell;
