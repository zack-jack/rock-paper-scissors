import React from 'react';
import useScore from '../hooks/useScore';

const ScoreCard = () => {
  const { currentScore } = useScore();

  return (
    <div className="score-card">
      <p className="score-card__label">Score</p>
      <p
        data-testid="score-value"
        className="score-card__value"
      >
        {currentScore}
      </p>
    </div>
  );
};

export default ScoreCard;
