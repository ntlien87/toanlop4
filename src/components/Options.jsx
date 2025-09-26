import React from "react";
import clickSound from "../assets/sounds/click.mp3";

function Options({
  options,
  selectedOption,
  onSelectOption,
  isAnswered,
  correctAnswer,
}) {
  const playClickSound = () => {
    new Audio(clickSound).play();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((option, index) => {
        const isSelected = selectedOption === option;
        const isCorrectOption = option === correctAnswer;

        let optionClasses = `
          p-4 border-2 rounded-xl text-lg text-gray-800 font-semibold
          cursor-pointer transition-all duration-200 flex items-center justify-center
          border-b-4
        `;

        if (isAnswered) {
          // Khi đã bấm "Kiểm tra"
          optionClasses += " cursor-not-allowed";
          if (isSelected && isCorrectOption) {
            optionClasses += " bg-green-200 border-green-400 text-green-800";
          } else if (isSelected && !isCorrectOption) {
            optionClasses += " bg-red-200 border-red-400 text-red-800";
          } else if (isCorrectOption) {
            optionClasses +=
              " bg-green-100 border-green-300 text-green-700 opacity-70";
          } else {
            optionClasses +=
              " bg-gray-100 border-gray-200 text-gray-400 opacity-70";
          }
        } else {
          // Khi chưa bấm "Kiểm tra"
          if (isSelected) {
            optionClasses += " bg-blue-200 border-blue-400";
          } else {
            optionClasses +=
              " bg-white border-gray-300 hover:bg-gray-100 active:translate-y-0.5";
          }
        }

        return (
          <button
            key={index}
            className={optionClasses}
            onClick={() => {
              if (!isAnswered) {
                playClickSound();
                onSelectOption(option);
              }
            }}
            disabled={isAnswered}
            type="button"
          >
            <span className="mr-3 text-xl font-bold text-blue-500">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
