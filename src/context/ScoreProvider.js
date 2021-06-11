import { useState } from 'react';
import { PropTypes } from 'prop-types';
import ScoreContext from './ScoreContext';

const ScoreProvider = ({ score, children }) => {
  const [currentScore, setCurrentScore] = useState(score);

  return (
    <ScoreContext.Provider value={{ currentScore, setCurrentScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

ScoreProvider.propTypes = {
  score: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScoreProvider;
