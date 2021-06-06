/*
  global
  test,
  expect,
  jest,
*/

import React from 'react';
import {
  act, fireEvent, render, screen,
} from '@testing-library/react';
import Game from '../Game';

const page = {
  modal: {
    close: 'modal-close-x',
    rules: 'rules-img',
  },
  button: {
    rules: 'rules-btn',
  },
};

test('modal shows when rules button clicked', () => {
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.button.rules));

  expect(screen.queryByTestId(page.modal.rules)).toBeInTheDocument();
});

test('modal is closed when x button clicked', async () => {
  jest.useFakeTimers();
  render(<Game />);

  fireEvent.click(screen.getByTestId(page.button.rules));
  fireEvent.click(screen.getByTestId(page.modal.close));
  act(() => {
    jest.runAllTimers();
  });
  const rulesModal = screen.queryByTestId(page.modal.rules);

  expect(rulesModal).not.toBeInTheDocument();
});
