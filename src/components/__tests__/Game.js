/*
  global
  afterEach,
  test,
  expect,
  jest,
*/

import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Game from '../Game';
import Header from '../Header';
import ScoreProvider from '../../context/ScoreProvider';

const page = {
  stepOne: 'step-one',
  stepTwo: 'step-two',
  stepThree: 'step-three',
  button: {
    playAgain: 'play-again',
  },
  input: {
    rock: 'rps-rock-label',
    paper: 'rps-paper-label',
    scissors: 'rps-scissors-label',
  },
  resultMessage: 'result-message',
  score: 'score-value',
};

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('User wins | rock > scissors', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.67);
  render(
    <ScoreProvider score={0}>
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.rock));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You won');
});

test('User wins | scissors > paper', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.34);
  render(
    <ScoreProvider score={0}>
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.scissors));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You won');
});

test('User wins | paper > rock', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0);
  render(
    <ScoreProvider score={0}>
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.paper));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You won');
});

test('User loses | rock < paper', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.34);
  render(
    <ScoreProvider score={0}>
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.rock));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You lost');
});

test('User loses | scissors < rock', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0);
  render(
    <ScoreProvider score={0}>
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.scissors));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You lost');
});

test('User loses | paper < scissors', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.67);
  render(
    <ScoreProvider score={0}>
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.paper));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You lost');
});

test('User ties | rock = rock', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0);
  render(
    <ScoreProvider score={0}>
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.rock));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You tied');
});

test('User ties | scissors = scissors', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.67);
  render(
    <ScoreProvider score={0}>
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.scissors));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You tied');
});

test('User ties | paper = paper', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.34);
  render(
    <ScoreProvider score={0}>
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.paper));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You tied');
});

test('game is reset for another round | when play again button clicked', async () => {
  render(
    <ScoreProvider score={0}>
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.paper));
  await screen.queryByTestId(page.button.playAgain);
  fireEvent.click(screen.getByTestId(page.button.playAgain));
  await screen.queryAllByTestId(page.stepOne);

  expect(screen.queryByTestId(page.stepOne)).toBeInTheDocument();
});

test('score incremented | when user wins', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.67);
  render(
    <ScoreProvider score={0}>
      <Header />
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.rock));
  await screen.queryByTestId(page.resultMessage);
  await screen.queryByTestId(page.score);

  expect(screen.queryByTestId(page.score)).toHaveTextContent('1');
});

test('score decremented | when user loses', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.34);
  render(
    <ScoreProvider score={0}>
      <Header />
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.rock));
  await screen.queryByTestId(page.resultMessage);
  await screen.queryByTestId(page.score);

  expect(screen.queryByTestId(page.score)).toHaveTextContent('-1');
});

test('score does not change | when user ties', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0);
  render(
    <ScoreProvider score={0}>
      <Header />
      <Game />
    </ScoreProvider>,
  );

  fireEvent.click(screen.getByTestId(page.input.rock));
  await screen.queryByTestId(page.resultMessage);
  await screen.queryByTestId(page.score);

  expect(screen.queryByTestId(page.score)).toHaveTextContent('0');
});
