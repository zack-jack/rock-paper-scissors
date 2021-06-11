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
    if (!selectedValue || !computerSelection) return '';

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

  const submit = (e) => {
    e.preventDefault();

    setSelectedValue(e.target.value);

    const simulated = simulateComputerSelection();
    setComputerSelection(simulated);
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
  if (selectedValue && computerSelection) {
    return (
      <div
        data-testid="step-three"
        className="game step-three"
      >
        <form noValidate onSubmit={reset}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              {
              getSelectionIcon({
                value: options.indexOf(selectedValue),
                player: true,
              })
            }
              <p className="game__selection-label mt-4">You picked</p>
            </div>
            <div className="flex flex-col items-center">
              {
              getSelectionIcon({
                value: options.indexOf(computerSelection),
                player: false,
              })
            }
              <p className="game__selection-label mt-4">The house picked</p>
            </div>
          </div>
          <div className="text-center">
            <p
              data-testid="result-message"
              className="game__finished-msg mt-8"
            >
              { getResultMessage() }
            </p>
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

  if (selectedValue) {
    // User selection made, computer randomizing value
    return (
      <div
        data-testid="step-two"
        className="game step-two"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            {
              getSelectionIcon({
                value: options.indexOf(selectedValue),
                player: true,
              })
            }
            <p className="game__selection-label mt-4">You picked</p>
          </div>
          <div className="flex flex-col items-center">
            <Circle empty />
            <p className="game__selection-label mt-4">The house picked</p>
          </div>
        </div>
      </div>
    );
  }

  // No user selection has been made yet
  return (
    <div
      data-testid="step-one"
      className="game step-one"
    >
      <form noValidate className="game__form" onSubmit={submit}>
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
