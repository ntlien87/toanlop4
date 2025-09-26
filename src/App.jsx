import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./components/HomePage.jsx";
import LearningPath from "./components/LearningPath.jsx";
import QuizPage from "./components/QuizPage.jsx";
import ResultPage from "./components/ResultPage.jsx";

// Component NotFoundPage đơn giản
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Trang không tìm thấy
        </h2>
        <p className="text-gray-500 mb-8">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
        >
          Về trang chủ
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="learn" element={<LearningPath />} />
          <Route path="quiz/:topicId" element={<QuizPage />} />
          <Route path="result/:topicId" element={<ResultPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
``