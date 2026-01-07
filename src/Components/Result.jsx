 function Result({ score, total, restart }) {
  return (
    <div className="quiz-card fade">
      <h2>🎉 Quiz Completed</h2>
      <p className="score">
        Your Score: <strong>{score}</strong> / {total}
      </p>

      <button className="restart-btn" onClick={restart}>
        Restart Quiz
      </button>
    </div>
  );
}
export default Result;