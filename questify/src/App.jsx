import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import QuestionExtractor from './components/QuestionExtractor';
import ResultsDisplay from './components/ResultsDisplay';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <div className="app-container">
      <h1>Questify - AI-Powered Question Answering</h1>
      <FileUpload setQuestions={setQuestions} />
      {questions.length > 0 && (
        <QuestionExtractor 
          questions={questions}
          setUserAnswers={setUserAnswers}
        />
      )}
      {userAnswers.length > 0 && (
        <ResultsDisplay 
          questions={questions}
          userAnswers={userAnswers}
        />
      )}
    </div>
  );
};

export default App;
