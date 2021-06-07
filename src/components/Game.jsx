import React, { useState } from 'react';
import Circle from './Circle';
import InputRadio from './InputRadio';
import { ReactComponent as RockSVG } from '../assets/images/_icon-rock.svg';
import { ReactComponent as PaperSVG } from '../assets/images/_icon-paper.svg';
import { ReactComponent as ScissorsSVG } from '../assets/images/_icon-scissors.svg';

const Game = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [compValue, setCompValue] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setSelectedValue(e.target.value);
  };

  const handleValueChange = (e) => {
    submit(e);
  };

  if (selectedValue && compValue) {
    // Win, loss, tie declared
    return (
      <div>
        outcome
      </div>
    );
  }

  if (selectedValue) {
    // User selection made, computer randomizing value
    return (
      <div className="game step-two">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <Circle
              color="blue"
              icon={<PaperSVG />}
            />
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
    <div className="game step-one">
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
