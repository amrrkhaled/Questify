import React, { useState } from 'react';

const QuestionExtractor = ({ questions, setUserAnswers }) => {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (index, answer) => {
    setAnswers({ ...answers, [index]: answer });
  };

  const submitAnswers = () => {
    setUserAnswers(answers);
  };

  return (
    <div>
      <h2>Answer Questions:</h2>
      {questions.map((q, index) => (
        <div key={index}>
          <p>{q.question}</p>
          <input
            type="text"
            placeholder="Your Answer"
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={submitAnswers}>Submit Answers</button>
    </div>
  );
};

export default QuestionExtractor;
