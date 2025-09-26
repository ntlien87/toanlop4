import React from "react";

function Options({
  options,
  selectedOption,
  onSelectOption,
  isAnswered,
  correctAnswer,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((option, index) => {
        const isSelected = selectedOption === option;
        const isCorrectOption = option === correctAnswer;

        let optionClasses = `
          p-4 border-2 rounded-lg text-lg text-gray-800 font-medium
          cursor-pointer transition-all duration-200 flex items-center justify-start
        `;

        if (isAnswered) {
          // Khi đã bấm "Kiểm tra"
          if (isSelected && isCorrectOption) {
            optionClasses += " bg-green-100 border-green-500 text-green-700";
          } else if (isSelected && !isCorrectOption) {
            optionClasses += " bg-red-100 border-red-500 text-red-700";
          } else if (isCorrectOption) {
            // Hiện đáp án đúng nếu người dùng chọn sai
            optionClasses += " bg-green-50 border-green-300";
          } else {
            // Các đáp án sai khác
            optionClasses += " bg-gray-50 border-gray-200 text-gray-400";
          }
        } else {
          // Khi chưa bấm "Kiểm tra"
          if (isSelected) {
            optionClasses += " bg-blue-200 border-blue-500"; // Màu khi được chọn
          } else {
            optionClasses += " hover:bg-blue-100 border-gray-300"; // Màu mặc định
          }
        }

        return (
          <button
            key={index}
            className={optionClasses}
            onClick={() => !isAnswered && onSelectOption(option)}
            disabled={isAnswered}
            type="button"
          >
            <span className="mr-3 text-xl font-bold text-gray-500">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
