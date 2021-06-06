import React from 'react';
import Modal from './Modal';
import ModalRules from './ModalRules';
import useModal from '../hooks/useModal';

const Game = () => {
  const { isOpen, close, open } = useModal();

  return (
    <>
      <div>
        <h1>Game Content</h1>
      </div>
      <div className="flex justify-center">
        <button
          data-testid="rules-btn"
          type="button"
          className="c-btn"
          onClick={open}
        >
          Rules
        </button>
      </div>
      <Modal
        heading="Rules"
        isOpen={isOpen}
        close={close}
        open={open}
      >
        <ModalRules data-testid="rules-modal" />
      </Modal>
    </>
  );
};

export default Game;
