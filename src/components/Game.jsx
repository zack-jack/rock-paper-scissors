import React, {
  useEffect, useMemo, useState,
} from 'react';
import Circle from './Circle';
import InputRadio from './InputRadio';
import { ReactComponent as RockSVG } from '../assets/images/_icon-rock.svg';
import { ReactComponent as PaperSVG } from '../assets/images/_icon-paper.svg';
import { ReactComponent as ScissorsSVG } from '../assets/images/_icon-scissors.svg';
import useScore from '../hooks/useScore';

const Game = () => {
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [computerSelection, setComputerSelection] = useState('');
  const [result, setResult] = useState('');
  // array order matters
  const options = useMemo(() => ['rock', 'paper', 'scissors'], []);
  const { currentScore, setCurrentScore } = useScore();

  useEffect(() => {
    const x = options.indexOf(selectedValue);
    const y = options.indexOf(computerSelection);

    switch (true) {
      case x === y:
        setResult('tie');
        break;
      case y === 0 && x === (options.length - 1):
        setResult('loss');
        setCurrentScore(currentScore - 1);
        break;
      case x === 0 && y === (options.length - 1):
      case x > y:
        setResult('win');
        setCurrentScore(currentScore + 1);
        break;
      default:
        setResult('loss');
        setCurrentScore(currentScore - 1);
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computerSelection]);

  useEffect(() => {
    localStorage.setItem('rpsscore', currentScore.toString());
  }, [currentScore]);

  /**
   * Randomly selects an available option to play
   * @returns {String} - one of the options
   */
  const simulateComputerSelection = () => {
    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
  };

  /**
   * Get win, loss or tie message to display at the end of a round
   * @returns {String}
   */
  const getResultMessage = () => {
    const messageMap = {
      win: 'You won',
      loss: 'You lost',
      tie: 'You tied',
    };

    return messageMap[result];
  };

  /**
   * Get icon component that corresponds to the selected option
   * @param {Number} options.value
   * @param {Boolean} options.player - icon is for player?
   * @returns {JSX}
   */
  const getSelectionIcon = ({ value, player = false }) => {
    if (loading && !player) return <Circle loading />;

    const attrs = {
      0: {
        color: 'red',
        icon: <RockSVG />,
      },
      1: {
        color: 'blue',
        icon: <PaperSVG />,
      },
      2: {
        color: 'yellow',
        icon: <ScissorsSVG />,
      },
    };

    const getClassName = () => {
      if (result === 'tie') return '';
      if (player && result === 'win') return 'circle--winner';
      if (!player && result === 'loss') return 'circle--winner';
      return '';
    };

    return (
      <Circle
        color={attrs[value].color}
        icon={attrs[value].icon}
        className={getClassName()}
      />
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const simulated = simulateComputerSelection();
      setComputerSelection(simulated);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const submit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSelectedValue(e.target.value);
  };

  const handleValueChange = (e) => {
    submit(e);
  };

  const reset = (e) => {
    e.preventDefault();

    setSelectedValue('');
    setComputerSelection('');
    setResult('');
  };

  // Win, loss, tie declared
  if (selectedValue) {
    return (
      <div
        data-testid="game-finish"
        className="game-finish"
      >
        <form
          noValidate
          className="game-finish__form"
          onSubmit={reset}
        >
          <div className="game-finish__result">
            {
                getSelectionIcon({
                  value: options.indexOf(selectedValue),
                  player: true,
                })
              }
            <p className="game-finish__selection-label mt-4">You picked</p>
          </div>
          <div className="game-finish__result">
            {
                getSelectionIcon({
                  value: options.indexOf(computerSelection),
                  player: false,
                })
              }
            <p
              className={
                loading
                  ? 'game-finish__selection-label invisible mt-4'
                  : 'game-finish__selection-label mt-4'
              }
            >
              The house picked
            </p>
          </div>
          <div
            className={
              loading
                ? 'game-finish__actions invisible'
                : 'game-finish__actions'
            }
          >
            <p
              data-testid="result-message"
              className="game-finish__result-msg"
            >
              { getResultMessage() }
            </p>
            <button
              data-testid="reset-score"
              type="button"
              className="btn btn--ghost mt-6"
              onClick={() => setCurrentScore(0)}
            >
              Reset score
            </button>
            <button
              data-testid="play-again"
              type="submit"
              className="btn mt-6"
            >
              Play again
            </button>
          </div>
        </form>
      </div>
    );
  }

  // No user selection has been made yet
  return (
    <div
      data-testid="game-start"
      className="game-start"
    >
      <form noValidate className="game-start__form" onSubmit={submit}>
        <InputRadio
          formValue="paper"
          name="rps"
          value={selectedValue}
          onValueChange={handleValueChange}
        >
          <Circle
            color="blue"
            icon={<PaperSVG />}
          />
        </InputRadio>
        <InputRadio
          formValue="scissors"
          name="rps"
          value={selectedValue}
          onValueChange={handleValueChange}
        >
          <Circle
            color="yellow"
            icon={<ScissorsSVG />}
          />
        </InputRadio>
        <InputRadio
          formValue="rock"
          name="rps"
          value={selectedValue}
          onValueChange={handleValueChange}
        >
          <Circle
            color="red"
            icon={<RockSVG />}
          />
        </InputRadio>
      </form>
    </div>
  );
};

export default Game;
