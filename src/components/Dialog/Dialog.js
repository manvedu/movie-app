import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import FocusTrap from 'focus-trap-react';
import './Dialog.css';

const Dialog = ({ title, children, onClose }) => (
  <Portal>
    <FocusTrap>
      <div className="dialog-overlay" data-testid="dialog-overlay">
        <div className="dialog" data-testid="dialog">
          <header className="dialog-header" data-testid="dialog-header">
            <h2 data-testid="dialog-title">{title}</h2>
            <button onClick={onClose} className="close-button" data-testid="dialog-close-button">×</button>
          </header>
          <div className="dialog-body" data-testid="dialog-body">
            {children}
          </div>
        </div>
      </div>
    </FocusTrap>
  </Portal>
);

Dialog.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
