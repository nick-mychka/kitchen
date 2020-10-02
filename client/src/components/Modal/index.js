import React from 'react';
import {createPortal} from 'react-dom';

import T from 'prop-types';
import cx from 'classnames';

import './Modal.scss';

const Modal = ({isOpen, handleModal, children}) => {
  return createPortal(
      <div className={cx('modal', {'d-block': isOpen})}>
        <div className="modal-backdrop" onClick={() => handleModal(false)} />
        <div className="modal-content bg-light">
          <button
            type="button"
            className="close close-modal"
            onClick={() => handleModal(false)}
          >
            <span>&times;</span>
          </button>
          <div className="container">
            <div className="row">
              <div className="col-12 layout-offset">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  handleModal: T.func.isRequired,
  isOpen: T.bool.isRequired,
  children: T.element,
};

export default Modal;