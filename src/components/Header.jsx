import React from "react";
import { Link } from "react-router-dom";
import { useMath } from "../context/MathContext.jsx"; // Để có thể reset tiến độ

function Header() {
  const { resetProgress } = useMath();

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
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/learn"
                className="text-lg hover:text-yellow-200 transition-colors"
              >
                Học
              </Link>
            </li>
            {/* Thêm các mục điều hướng khác nếu cần */}
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
