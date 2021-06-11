import { useContext } from 'react';
import ScoreContext from '../context/ScoreContext';

const useScore = () => useContext(ScoreContext);

export default useScore;
