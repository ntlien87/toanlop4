import React from "react";
import { Link } from "react-router-dom";
import { useMath } from "../context/MathContext.jsx";
import { FaFire } from "react-icons/fa";

function Header() {
  const { resetProgress, winStreak } = useMath();

  return (
    <header className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold font-display tracking-tight hover:text-yellow-200 transition-colors"
        >
          Toán Lớp 4
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            <li
              className="relative flex items-center space-x-2 text-yellow-300 group"
              title={
                winStreak > 0
                  ? `Bạn đã học ${winStreak} ngày liên tiếp!`
                  : "Hoàn thành một bài học để bắt đầu chuỗi ngày học!"
              }
            >
              <FaFire
                className={`text-3xl transition-all duration-300 ${
                  winStreak > 0
                    ? "text-orange-400 animate-pulse"
                    : "text-gray-400"
                }`}
              />
              <span className="font-bold text-2xl">{winStreak}</span>
              <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md px-3 py-1 whitespace-nowrap shadow-lg">
                {winStreak > 0
                  ? `Chuỗi ${winStreak} ngày học!`
                  : "Bắt đầu học nào!"}
              </div>
            </li>
            <li>
              <Link
                to="/learn"
                className="text-lg hover:text-yellow-200 transition-colors"
              >
                Học
              </Link>
            </li>
            <li>
              <button
                onClick={resetProgress}
                className="text-lg text-red-200 hover:text-red-50 transition-colors"
                title="Đặt lại toàn bộ tiến độ"
              >
                Reset
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
