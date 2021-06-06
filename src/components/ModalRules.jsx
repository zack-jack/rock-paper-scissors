import React from 'react';
import { ReactComponent as RulesSVG } from '../assets/images/_image-rules.svg';

const ModalRules = () => (
  <>
    <RulesSVG
      aria-hidden="true"
      data-testid="rules-img"
    />
    <div className="sr-only">
      <ul>
        <li>Rock beats Scissors</li>
        <li>Scissors beats Paper</li>
        <li>Paper beats Rock</li>
      </ul>
    </div>
  </>
);

export default ModalRules;
