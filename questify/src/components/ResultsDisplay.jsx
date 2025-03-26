import React from 'react';

const ResultsDisplay = ({ questions, userAnswers }) => {
  return (
    <div>
      <h2>Results:</h2>
      {questions.map((q, index) => (
        <div key={index}>
          <p>Q: {q.question}</p>
          <p>Your Answer: {userAnswers[index] || 'No Answer'}</p>
          <p>Label: {userAnswers[index] ? 'From PDF' : 'AI-Generated'}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsDisplay;
