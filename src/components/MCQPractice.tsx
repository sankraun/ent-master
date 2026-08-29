import { useState } from 'react';
import { myiasisMCQs } from '../data/mcqs';
import type { MCQQuestion } from '../data/mcqs';

interface MCQPracticeProps {
  onBackToNotes?: () => void;
}

export default function MCQPractice({ onBackToNotes }: MCQPracticeProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const totalQuestions = myiasisMCQs.length;
  const currentQuestion: MCQQuestion = myiasisMCQs[currentIdx];
  const isAnswered = selectedAnswers[currentQuestion.id] !== undefined;
  const selectedOption = selectedAnswers[currentQuestion.id];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return; // Prevent changing after selection
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: index
    }));
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = myiasisMCQs.filter(
    q => selectedAnswers[q.id] === q.correctAnswer
  ).length;

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowSummary(false);
  };

  if (showSummary) {
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    return (
      <div className="mcq-summary-card">
        <div className="mcq-summary-header">
          <div className="score-badge-circle">
            <span className="score-number">{percentage}%</span>
            <span className="score-label">Score</span>
          </div>
          <h2>MCQ Practice Results</h2>
          <p className="summary-subtitle">
            You scored <strong>{correctCount}</strong> out of <strong>{totalQuestions}</strong> questions correctly ({percentage}%).
          </p>
        </div>

        <div className="mcq-results-list">
          <h3>Question Review</h3>
          {myiasisMCQs.map((q, idx) => {
            const userAnswer = selectedAnswers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            const isSkipped = userAnswer === undefined;

            return (
              <div 
                key={q.id} 
                className={`mcq-review-item ${isCorrect ? 'correct-review' : isSkipped ? 'skipped-review' : 'wrong-review'}`}
              >
                <div className="mcq-review-top">
                  <span className="q-badge">Q{idx + 1}</span>
                  <span className="topic-pill">{q.topicTag}</span>
                  <span className={`status-pill ${isCorrect ? 'status-correct' : isSkipped ? 'status-skipped' : 'status-wrong'}`}>
                    {isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Incorrect'}
                  </span>
                </div>
                <p className="review-question-text">{q.question}</p>
                <div className="review-answers">
                  <div className="review-answer-row correct-row">
                    <span className="ans-tag">Correct:</span>
                    <span>{q.options[q.correctAnswer]}</span>
                  </div>
                  {!isCorrect && !isSkipped && (
                    <div className="review-answer-row wrong-row">
                      <span className="ans-tag">Your answer:</span>
                      <span>{q.options[userAnswer]}</span>
                    </div>
                  )}
                </div>
                <div className="review-explanation">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mcq-summary-actions">
          <button className="btn-primary" onClick={handleReset}>
            Retake Quiz
          </button>
          {onBackToNotes && (
            <button className="btn-secondary" onClick={onBackToNotes}>
              Back to Study Notes
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mcq-practice-container">
      {/* Top Header / Progress Bar */}
      <div className="mcq-top-bar">
        <div className="mcq-info">
          <span className="mcq-category-tag">{currentQuestion.topicTag}</span>
          <span className="mcq-counter">
            Question {currentIdx + 1} of {totalQuestions}
          </span>
        </div>
        <div className="mcq-score-preview">
          <span>Answered: {answeredCount}/{totalQuestions}</span>
          <span className="score-live-badge">Score: {correctCount}</span>
        </div>
      </div>

      <div className="mcq-progress-bar-track">
        <div 
          className="mcq-progress-bar-fill"
          style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="mcq-card">
        <h3 className="mcq-question-text">
          <span className="mcq-q-num">Q{currentIdx + 1}.</span> {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="mcq-options-list">
          {currentQuestion.options.map((option, optIdx) => {
            const isSelected = selectedOption === optIdx;
            const isCorrect = currentQuestion.correctAnswer === optIdx;
            
            let optionClass = 'mcq-option';
            if (isAnswered) {
              if (isCorrect) {
                optionClass += ' option-correct';
              } else if (isSelected) {
                optionClass += ' option-wrong';
              } else {
                optionClass += ' option-dimmed';
              }
            } else if (isSelected) {
              optionClass += ' option-selected';
            }

            return (
              <button
                key={optIdx}
                className={optionClass}
                onClick={() => handleSelectOption(optIdx)}
                disabled={isAnswered}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + optIdx)}
                </span>
                <span className="option-text">{option}</span>
                {isAnswered && isCorrect && (
                  <span className="option-indicator indicator-correct">✓</span>
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <span className="option-indicator indicator-wrong">✕</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Card (shows after answer) */}
        {isAnswered && (
          <div className={`mcq-explanation-box ${selectedOption === currentQuestion.correctAnswer ? 'exp-correct' : 'exp-wrong'}`}>
            <div className="exp-header">
              <span className="exp-title">
                {selectedOption === currentQuestion.correctAnswer ? 'Correct' : 'Explanation & High-Yield Pearl'}
              </span>
            </div>
            <p className="exp-body">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="mcq-nav-footer">
        <button
          className="btn-nav"
          onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
          disabled={currentIdx === 0}
        >
          Previous
        </button>

        <div className="mcq-jump-grid">
          {myiasisMCQs.map((q, idx) => {
            const ans = selectedAnswers[q.id];
            let dotClass = 'jump-dot';
            if (idx === currentIdx) dotClass += ' current-dot';
            if (ans !== undefined) {
              dotClass += ans === q.correctAnswer ? ' dot-correct' : ' dot-wrong';
            }

            return (
              <button
                key={q.id}
                className={dotClass}
                onClick={() => setCurrentIdx(idx)}
                title={`Jump to Q${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {currentIdx < totalQuestions - 1 ? (
          <button
            className="btn-nav btn-nav-primary"
            onClick={() => setCurrentIdx(prev => Math.min(totalQuestions - 1, prev + 1))}
          >
            Next
          </button>
        ) : (
          <button
            className="btn-nav btn-nav-finish"
            onClick={() => setShowSummary(true)}
          >
            Complete & Review
          </button>
        )}
      </div>

      {/* Quick Link to Finish anytime if multiple questions answered */}
      {answeredCount > 0 && !showSummary && (
        <div className="mcq-finish-bar">
          <button className="btn-text-action" onClick={() => setShowSummary(true)}>
            Finish Quiz & View Summary ({answeredCount}/{totalQuestions} completed)
          </button>
        </div>
      )}
    </div>
  );
}
