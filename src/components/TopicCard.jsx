import React from "react";
import { Link } from "react-router-dom";
import { useMath } from "../context/MathContext.jsx";
import { FaLock, FaCheckCircle, FaStar, FaPlay } from "react-icons/fa"; // Import icons

function TopicCard({ topic, order }) {
  const { userProgress } = useMath();
  const progress = userProgress[topic.id] || { score: 0, isCompleted: false };

  const cardClasses = `
    relative w-64 h-48 flex flex-col items-center justify-center p-4 rounded-xl shadow-lg m-4
    transition-all duration-300 ease-in-out transform
    ${
      topic.isLocked
        ? "bg-gray-200 text-gray-500 cursor-not-allowed grayscale"
        : progress.isCompleted
        ? "bg-green-100 text-green-700 border-2 border-green-500 hover:scale-105"
        : "bg-white text-blue-700 border-2 border-blue-400 hover:scale-105 hover:shadow-xl"
    }
  `;

  const renderContent = () => {
    if (topic.isLocked) {
      return (
        <>
          <FaLock className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold text-center">{topic.topic}</h3>
          <p className="text-sm mt-2">Hoàn thành bài trước để mở khóa</p>
        </>
      );
    } else if (progress.isCompleted) {
      return (
        <>
          <FaCheckCircle className="text-4xl text-green-500 mb-2" />
          <h3 className="text-xl font-semibold text-center">{topic.topic}</h3>
          <p className="text-sm mt-2 font-bold">
            Hoàn thành ({progress.score}/10)
          </p>
          <div className="w-full flex justify-center mt-4">
            <Link
              to={`/quiz/${topic.id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-base font-semibold flex items-center shadow-md"
              title="Làm lại bài học"
            >
              <FaPlay className="mr-2" /> Luyện tập
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <FaStar className="text-4xl text-yellow-500 mb-2" />
          <h3 className="text-xl font-semibold text-center">{topic.topic}</h3>
          <p className="text-sm mt-2">Tiến độ: {progress.score}/10</p>
          <div className="w-full flex justify-center mt-4">
            <Link
              to={`/quiz/${topic.id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-base font-semibold flex items-center shadow-md"
            >
              <FaPlay className="mr-2" /> Bắt đầu
            </Link>
          </div>
        </>
      );
    }
  };

  return (
    <div className={cardClasses}>
      <span className="absolute top-2 left-2 text-xs font-bold bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
        {order}
      </span>
      {renderContent()}
    </div>
  );
}

export default TopicCard;
