import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMath } from "../context/MathContext.jsx";
import Question from "./Question.jsx";
import Feedback from "./Feedback.jsx";

function QuizPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { getTopicById, updateTopicProgress } = useMath();
  const topic = getTopicById(topicId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [showTheory, setShowTheory] = useState(true);

  useEffect(() => {
    if (!topic || topic.isLocked) {
      navigate("/learn");
      return;
    }
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setShowFeedback(false);
    setAnsweredCount(0);
    setShowTheory(true);
  }, [topicId, topic, navigate]);

  if (!topic) {
    return (
      <div className="text-center text-xl mt-10">
        Đang tải hoặc không tìm thấy bài học...
      </div>
    );
  }

  const currentQuestion = topic.questions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    // Cho phép chọn lại đáp án khác nếu chưa bấm "Kiểm tra"
    if (!showFeedback) {
      setSelectedOption(option);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    const correct = selectedOption === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }
    setAnsweredCount((prev) => prev + 1);
  };

  const handleContinue = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    setIsCorrect(null);
    if (answeredCount === topic.questions.length) {
      updateTopicProgress(topic.id, score);
      navigate(`/result/${topic.id}`);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const getProgressBarWidth = () => {
    return `${(answeredCount / topic.questions.length) * 100}%`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {showTheory && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative animate-fade-in">
            <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
              Lý thuyết chủ đề
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {topic.topic}
            </h3>
            <div className="text-gray-700 text-base mb-6 text-left whitespace-pre-line max-h-80 overflow-y-auto">
              {topic.theory || "(Chưa có lý thuyết cho chủ đề này)"}
            </div>
            <button
              onClick={() => setShowTheory(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-xl mt-2 transition-all"
            >
              Bắt đầu làm bài
            </button>
          </div>
        </div>
      )}
      {!showTheory && (
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate("/learn")}
              className="text-gray-500 hover:text-gray-700 text-2xl mr-4"
            >
              &times;
            </button>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: getProgressBarWidth() }}
              ></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {topic.topic}
          </h2>
          {currentQuestion && (
            <Question
              question={currentQuestion}
              selectedOption={selectedOption}
              onSelectOption={handleOptionSelect}
              isAnswered={showFeedback}
              correctAnswer={currentQuestion.correctAnswer}
            />
          )}
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedOption === null || showFeedback}
            className={`
              w-full py-4 mt-8 rounded-full text-2xl font-bold transition-all duration-200
              ${
                selectedOption === null || showFeedback
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white active:scale-95"
              }
            `}
          >
            Kiểm Tra
          </button>
        </div>
      )}
      {showFeedback && (
        <Feedback isCorrect={isCorrect} onContinue={handleContinue} />
      )}
    </div>
  );
}

export default QuizPage;
