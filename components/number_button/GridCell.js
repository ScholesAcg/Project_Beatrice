import React from "react";
import { cell } from "./style";

const GridCell = ({ index, isClicked, onClick }) => {
  return (
    <div
      style={{
        ...cell,
        transform: isClicked ? "scale(0.9)" : "scale(1)", // 縮放動畫
        transition: "transform 0.2s ease", // 動畫過渡效果
      }}
      onClick={onClick}
    >
      {index + 1}
    </div>
  );
};

export default GridCell;
