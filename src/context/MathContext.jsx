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

  const [winStreak, setWinStreak] = useState(() => {
    const savedStreak = localStorage.getItem("mathAppWinStreak");
    const lastCompletionDate = localStorage.getItem(
      "mathAppLastCompletionDate"
    );

    if (savedStreak && lastCompletionDate) {
      const today = new Date().toLocaleDateString();
      const lastDate = new Date(lastCompletionDate).toLocaleDateString();
      const yesterday = new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString();

      // Reset streak if user missed a day
      if (lastDate !== today && lastDate !== yesterday) {
        localStorage.setItem("mathAppWinStreak", "0");
        return 0;
      }
      return parseInt(savedStreak, 10);
    }
    return 0;
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

  useEffect(() => {
    localStorage.setItem("mathAppWinStreak", winStreak.toString());
  }, [winStreak]);

  const updateTopicProgress = (topicId, score) => {
    const topic = data.find((t) => t.topic.replace(/\s/g, "_") === topicId);
    const totalQuestions = topic?.questions?.length || 0;
    const isPerfectScore = score === totalQuestions;
    const today = new Date().toLocaleDateString();
    const lastCompletionDate = localStorage.getItem(
      "mathAppLastCompletionDate"
    );

    if (isPerfectScore) {
      // Chỉ tăng streak nếu ngày hoàn thành gần nhất không phải là hôm nay
      if (
        !lastCompletionDate ||
        new Date(lastCompletionDate).toLocaleDateString() !== today
      ) {
        setWinStreak((prevStreak) => {
          const lastDate = lastCompletionDate
            ? new Date(lastCompletionDate).toLocaleDateString()
            : null;
          const yesterday = new Date(
            new Date().setDate(new Date().getDate() - 1)
          ).toLocaleDateString();
          // Nếu ngày cuối là hôm qua thì tăng, ngược lại reset về 1
          const newStreak = lastDate === yesterday ? prevStreak + 1 : 1;
          return newStreak;
        });
        localStorage.setItem(
          "mathAppLastCompletionDate",
          new Date().toISOString()
        );
      }
    }
    // Không reset streak nếu không đạt điểm tuyệt đối, chỉ không tăng

    setUserProgress((prevProgress) => {
      const isCompleted = score > 0; // Mở khóa bài tiếp theo chỉ cần có điểm
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
    localStorage.removeItem("mathAppWinStreak");
    localStorage.removeItem("mathAppLastCompletionDate");
    setUserProgress({});
    setWinStreak(0);
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
        winStreak,
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
