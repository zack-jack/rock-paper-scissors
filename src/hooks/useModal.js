import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen(!isOpen);

  return {
    close,
    isOpen,
    open,
    toggle,
  };
};

export default useModal;
