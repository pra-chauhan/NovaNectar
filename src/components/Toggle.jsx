// Toggle.jsx
import React from "react";

const Toggle = ({ isOn, onToggle }) => {
  return (
    <div
      className={`w-10 h-5 flex items-center ${
        isOn ? "bg-indigo-500" : "bg-gray-400"
      } rounded-full p-1 cursor-pointer duration-300`}
      onClick={onToggle}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
          isOn ? "translate-x-5" : ""
        }`}
      />
    </div>
  );
};

export default Toggle;