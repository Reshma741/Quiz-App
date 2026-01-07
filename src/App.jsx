import { useState } from "react";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import  {questions}  from "./Data/Question";
import "./index.css";

export default function App() {
  const [finished, setFinished] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleFinish = (score) => {
    setFinalScore(score);
    setFinished(true);
  };

  const restartQuiz = () => {
    localStorage.clear();
    setFinalScore(0);
    setFinished(false);
  };

  return (
    <div className="app">
      <h1> Test your Your Knowledge</h1>
      {!finished ? (
        <Quiz onFinish={handleFinish} />
      ) : (
        <Result
          score={finalScore}
          total={questions.length}
          restart={restartQuiz}
        />
      )}
    </div>
  );
}
