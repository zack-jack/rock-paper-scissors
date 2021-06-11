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

const page = {
  input: {
    rock: 'rps-rock-label',
    paper: 'rps-paper-label',
    scissors: 'rps-scissors-label',
  },
  resultMessage: 'result-message',
};

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('User wins | rock > scissors', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.67);
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.input.rock));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You won');
});

test('User wins | scissors > paper', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.34);
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.input.scissors));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You won');
});

test('User wins | paper > rock', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0);
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.input.paper));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You won');
});

test('User loses | rock < paper', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.34);
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.input.rock));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You lost');
});

test('User loses | scissors < rock', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0);
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.input.scissors));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You lost');
});

test('User loses | paper < scissors', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.67);
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.input.paper));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You lost');
});

test('User ties | rock = rock', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0);
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.input.rock));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You tied');
});

test('User ties | scissors = scissors', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.67);
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.input.scissors));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You tied');
});

test('User ties | paper = paper', async () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.34);
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.input.paper));
  await screen.queryByTestId(page.resultMessage);

  expect(screen.queryByTestId(page.resultMessage)).toHaveTextContent('You tied');
});
