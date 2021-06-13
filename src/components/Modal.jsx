import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import { ReactComponent as CloseXSVG } from '../assets/images/_icon-close-x.svg';

const Modal = ({
  heading, children, isOpen, close,
}) => {
  const [active, setActive] = useState(false);

  if (active && !isOpen) setActive(() => false);

  useEffect(() => {
    const timer = setTimeout(() => {
      close();
    }, 300);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const onClose = () => {
    setActive((currentIsActive) => !currentIsActive);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className={active ? 'modal fade-out' : 'modal fade-in'}>
        <div className="modal__backdrop" />
        <div
          aria-hidden
          aria-modal
          role="dialog"
          className="modal__dialog"
        >
          <p className="modal__heading">
            { heading }
          </p>
          <div className="modal__content">
            { children }
          </div>
          <button
            aria-label="Close"
            data-dismiss="modal"
            data-testid="modal-close-x"
            type="button"
            className="modal__close-btn"
            onClick={onClose}
          >
            <CloseXSVG aria-hidden="true" />
          </button>
        </div>
      </div>
    </>, document.body,
  );
};

Modal.defaultProps = {
  heading: '',
  isOpen: false,
};

Modal.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  close: PropTypes.func.isRequired,
};

export default Modal;
