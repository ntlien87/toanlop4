import React from "react";
import Options from "./Options.jsx";

function Question({
  question,
  selectedOption,
  onSelectOption,
  isAnswered,
  correctAnswer,
}) {
  return (
    <div className="mb-6">
      <p className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        {question.question}
      </p>
      <Options
        options={question.options}
        selectedOption={selectedOption}
        onSelectOption={onSelectOption}
        isAnswered={isAnswered}
        correctAnswer={correctAnswer}
      />
    </div>
  );
}

export default Question;
