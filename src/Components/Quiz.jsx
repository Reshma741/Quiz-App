import { useState, useEffect } from "react";
import  {questions}  from "../Data/Question";;


function Quiz({ onFinish }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || 0
  );

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  const handleAnswer = (index) => {
    setSelected(index);
    if (index === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      onFinish(score);
    }
  };

  return (
    <div className="quiz-card fade">
      <h2>
        Question {current + 1}/{questions.length}
      </h2>
      <p className="question">{questions[current].question}</p>

      <div className="options">
        {questions[current].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            disabled={selected !== null}
            className={
              selected !== null
                ? i === questions[current].answer
                  ? "correct"
                  : i === selected
                  ? "wrong"
                  : ""
                : ""
            }
          >
            {opt}
          </button>
        ))}
      </div>

      {selected !== null && (
        <button className="next-btn" onClick={nextQuestion}>
          Next →
        </button>
      )}
    </div>
  );
}

export default Quiz;