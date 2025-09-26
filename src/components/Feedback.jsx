import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

function Feedback({ isCorrect, onContinue }) {
  const bgColor = isCorrect ? "bg-green-500" : "bg-red-500";
  const textColor = "text-white";

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 p-6 shadow-2xl transition-transform duration-300 ease-out
        ${bgColor} ${textColor}
        translate-y-0
      `}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {isCorrect ? (
            <FaCheck className="text-3xl mr-4" />
          ) : (
            <FaTimes className="text-3xl mr-4" />
          )}
          <div>
            <p className="text-2xl font-bold mb-1">
              {isCorrect ? "Tuyệt vời! Đúng rồi!" : "Sai rồi..."}
            </p>
          </div>
        </div>
        <button
          onClick={onContinue}
          className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-xl shadow-md active:scale-95 transition-transform"
        >
          Tiếp Tục
        </button>
      </div>
    </div>
  );
}

export default Feedback;
