import React from "react";
import { cell } from "./style";

const ClearALLGridCell = ({ index, isClicked, onClick }) => {
  return (
    <div
      style={{
        ...cell,
        marginLeft: "3px",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        height: "55px",
        borderRadius: "6px",
        transform: isClicked ? "scale(0.9)" : "scale(1)", // 縮放動畫
        transition: "transform 0.2s ease", // 動畫過渡效果
        fontSize: "1rem",
        minWidth: "323px",
        width: "100%"
      }}
      onClick={onClick}
    >
      Clear ALL
    </div>
  );
};

export default ClearALLGridCell;
