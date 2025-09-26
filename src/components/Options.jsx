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
          ${!isAnswered ? "hover:bg-blue-100 border-gray-300" : ""}
          ${isSelected && !isAnswered ? "bg-blue-200 border-blue-500" : ""}
        `;

        // Styling khi đã trả lời
        if (isAnswered) {
          if (isSelected) {
            // Nếu lựa chọn này là lựa chọn của người dùng
            optionClasses += ` ${
              isCorrectOption
                ? "bg-green-100 border-green-500 text-green-700"
                : "bg-red-100 border-red-500 text-red-700"
            }`;
          } else if (isCorrectOption) {
            // Nếu đây là đáp án đúng nhưng không được chọn
            optionClasses += " bg-green-50 border-green-300"; // Đánh dấu đáp án đúng
          } else {
            // Các lựa chọn khác không được chọn và không phải đáp án đúng
            optionClasses += " bg-gray-50 border-gray-200 text-gray-400";
          }
        }

        return (
          <button
            key={index}
            className={optionClasses}
            onClick={() => !isAnswered && onSelectOption(option)}
            disabled={isAnswered}
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
