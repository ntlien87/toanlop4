import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMath } from "../context/MathContext.jsx";
import { FaTrophy, FaRedo, FaHome, FaTimes, FaPlay } from "react-icons/fa";

// Hàm phát âm thanh click
import clickMp3 from "../assets/sounds/click.mp3";
const clickSound = new Audio(clickMp3);
const playClickSound = () => {
  clickSound.currentTime = 0;
  clickSound.play();
};

function ResultPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { userProgress, getTopicById, topics } = useMath();

  const progress = userProgress[topicId];
  const topic = getTopicById(topicId);

  if (!progress || !topic) {
    navigate("/learn");
    return null;
  }

  const isPassed = progress.isCompleted;

  // Tìm topic tiếp theo (nếu có)
  const currentIndex = topics.findIndex((t) => t.id === topicId);
  const nextTopic =
    currentIndex !== -1 && currentIndex < topics.length - 1
      ? topics[currentIndex + 1]
      : null;
  const canGoNext = isPassed && nextTopic && !nextTopic.isLocked;

  const handleGoToLearn = () => {
    playClickSound();
    navigate("/learn");
  };

  const handleRetryTopic = () => {
    playClickSound();
    navigate(`/quiz/${topicId}`);
  };

  const handleGoToNextTopic = () => {
    playClickSound();
    if (nextTopic) {
      navigate(`/quiz/${nextTopic.id}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 text-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        {isPassed ? (
          <>
            <FaTrophy className="text-green-500 text-6xl mb-4 mx-auto" />
            <h2 className="text-4xl font-extrabold text-green-700 mb-4">
              Hoàn thành bài học!
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Bạn đã hoàn thành chủ đề "{topic.topic}" với số điểm:
              <span className="block text-5xl font-bold text-green-600 my-2">
                {progress.score} / {topic.questions.length}
              </span>
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Chúc mừng! Bạn đã sẵn sàng cho bài học tiếp theo.
            </p>
          </>
        ) : (
          <>
            <FaTimes className="text-red-500 text-6xl mb-4 mx-auto" />
            <h2 className="text-4xl font-extrabold text-red-700 mb-4">
              Chưa đạt yêu cầu!
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Bạn đã làm chủ đề "{topic.topic}" với số điểm:
              <span className="block text-5xl font-bold text-red-600 my-2">
                {progress.score} / {topic.questions.length}
              </span>
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Hãy cố gắng luyện tập thêm nhé!
            </p>
          </>
        )}

        <div className="flex flex-col space-y-4">
          {canGoNext && (
            <button
              onClick={handleGoToNextTopic}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-xl flex items-center justify-center transition-all transform hover:scale-105"
            >
              <FaPlay className="mr-2" /> Làm tiếp chủ đề tiếp theo
            </button>
          )}
          <button
            onClick={handleGoToLearn}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-xl flex items-center justify-center transition-all transform hover:scale-105"
          >
            <FaHome className="mr-2" /> Quay lại Lộ trình học
          </button>
          <button
            onClick={handleRetryTopic}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-xl flex items-center justify-center transition-all transform hover:scale-105"
          >
            <FaRedo className="mr-2" /> Thử lại bài này
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
