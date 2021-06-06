import React from 'react';
import Circle from './Circle';
import { ReactComponent as RockSVG } from '../assets/images/_icon-rock.svg';
import { ReactComponent as PaperSVG } from '../assets/images/_icon-paper.svg';
import { ReactComponent as ScissorsSVG } from '../assets/images/_icon-scissors.svg';

const Game = () => (
  <div className="game">
    <Circle
      color="blue"
      icon={<PaperSVG />}
    />
    <Circle
      color="yellow"
      icon={<ScissorsSVG />}
    />
    <Circle
      color="red"
      icon={<RockSVG />}
    />
  </div>
);

export default Game;
