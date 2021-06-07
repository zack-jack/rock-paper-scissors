import React from 'react';
import Modal from './Modal';
import ModalRules from './ModalRules';
import useModal from '../hooks/useModal';

const Footer = () => {
  const { isOpen, close, open } = useModal();

  return (
    <>
      <footer className="flex justify-center">
        <button
          data-testid="rules-btn"
          type="button"
          className="btn"
          onClick={open}
        >
          Rules
        </button>
      </footer>
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

export default Footer;