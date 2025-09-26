// Hàm shuffle mảng (Fisher-Yates)
function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

import React, { createContext, useState, useEffect, useContext } from "react";
import data from "../data.js"; // Import dữ liệu của bạn

const MathContext = createContext();

export const MathProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);
  const [userProgress, setUserProgress] = useState(() => {
    // Tải tiến độ người dùng từ Local Storage hoặc khởi tạo mặc định
    const savedProgress = localStorage.getItem("mathAppProgress");
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  useEffect(() => {
    // Khi khởi tạo topics, shuffle options của từng question
    const initialTopics = data.map((topicData, index) => {
      const id = topicData.topic.replace(/\s/g, "_");
      let isLocked = false;
      if (index === 0) {
        isLocked = false;
      } else {
        const prevId = data[index - 1].topic.replace(/\s/g, "_");
        isLocked = !userProgress[prevId]?.isCompleted;
      }
      // Shuffle options cho mỗi question
      const questions = topicData.questions.map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }));
      return {
        ...topicData,
        id,
        isLocked,
        questions,
      };
    });
    setTopics(initialTopics);
  }, [userProgress]);

  useEffect(() => {
    localStorage.setItem("mathAppProgress", JSON.stringify(userProgress));
  }, [userProgress]);

  const updateTopicProgress = (topicId, score) => {
    setUserProgress((prevProgress) => {
      // Lấy số câu hỏi của topic hiện tại
      const topic = data.find((t) => t.topic.replace(/\s/g, "_") === topicId);
      const totalQuestions = topic?.questions?.length || 10;
      const isCompleted = score === totalQuestions;
      const newProgress = {
        ...prevProgress,
        [topicId]: {
          score: score,
          isCompleted: isCompleted,
        },
      };
      return newProgress;
    });
  };

  const getTopicById = (id) => topics.find((topic) => topic.id === id);

  // Reset toàn bộ tiến độ người dùng
  const resetProgress = () => {
    localStorage.removeItem("mathAppProgress");
    setUserProgress({});
    // Cập nhật lại topics để mở khóa topic đầu tiên
    const initialTopics = data.map((topicData, index) => ({
      ...topicData,
      id: topicData.topic.replace(/\s/g, "_"),
      isLocked: index !== 0,
    }));
    setTopics(initialTopics);
  };

  return (
    <MathContext.Provider
      value={{
        topics,
        userProgress,
        updateTopicProgress,
        getTopicById,
        resetProgress,
      }}
    >
      {children}
    </MathContext.Provider>
  );
};

export const useMath = () => useContext(MathContext);
