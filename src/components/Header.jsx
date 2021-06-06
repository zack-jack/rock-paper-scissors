import React from 'react';
import ScoreCard from './ScoreCard';
import { ReactComponent as LogoSVG } from '../assets/images/logo.svg';

const Header = () => (
  <header className="header">
    <div className="header__logo-wrapper">
      <LogoSVG
        alt="Rock, Paper, Scissors Logo"
        className="header__logo"
      />
    </div>
    <ScoreCard />
  </header>
);

export default Header;
