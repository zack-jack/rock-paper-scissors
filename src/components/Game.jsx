import React, { useState } from 'react';
import Circle from './Circle';
import InputRadio from './InputRadio';
import { ReactComponent as RockSVG } from '../assets/images/_icon-rock.svg';
import { ReactComponent as PaperSVG } from '../assets/images/_icon-paper.svg';
import { ReactComponent as ScissorsSVG } from '../assets/images/_icon-scissors.svg';

const Game = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setSelectedValue(e.target.value);
  };

  const handleValueChange = (e) => {
    submit(e);
  };

  return (
    <div className="game">
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
