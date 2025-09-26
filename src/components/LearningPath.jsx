import React from "react";
import TopicCard from "./TopicCard.jsx";
import { useMath } from "../context/MathContext.jsx";

function LearningPath() {
  const { topics } = useMath();

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Lộ Trình Học Toán
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {topics.map((topic, index) => (
          <TopicCard key={topic.id} topic={topic} order={index + 1} />
        ))}
      </div>
      <div className="mt-12">
        {/* Minh họa một con đường học tập của Duolingo */}
      </div>
    </div>
  );
}

export default LearningPath;
