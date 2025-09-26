import React from "react";
import { Link } from "react-router-dom";
// import DuolingoLikeImage from '../assets/duolingo-like-mascot.png'; // Nếu có ảnh mascot

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
      <h1 className="text-6xl font-extrabold text-blue-700 mb-6 animate-fade-in">
        Chào mừng đến với Học Toán Lớp 4!
      </h1>
      <p className="text-xl text-gray-700 max-w-2xl mb-10 animate-fade-in delay-200">
        Hãy bắt đầu cuộc hành trình chinh phục các con số và phép tính theo
        phong cách Duolingo!
      </p>
      {/* <img src={DuolingoLikeImage} alt="Mascot" className="w-64 h-auto mb-10 animate-bounce-in" /> */}
      <div className="flex space-x-4">
        <Link
          to="/learn"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg transition-all transform hover:scale-105 animate-pop-in"
        >
          Bắt đầu học!
        </Link>
        {/* Có thể thêm nút "Tiếp tục" hoặc "Xem tiến độ" */}
      </div>

      {/* Thêm một hình ảnh minh họa cho toán học Duolingo */}
      <div className="mt-12"></div>
    </div>
  );
}

export default HomePage;
