import React, { Component } from 'react';
import './Modal.scss';

/**
 * Used in TickerItem.
 * Referenced from https://medium.com/@pppped/build-a-simple-modal-window-with-react-and-jss-f05041d899cc
 */
class Modal extends Component {
  constructor() {
    super();
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleKeyUp = (e) => {
    e.preventDefault();
    const { onCloseRequest } = this.props;
    if (e.keyCode === 27) {
      onCloseRequest();
      window.removeEventListener('keyup', this.handleKeyUp, false);
    }
  }

  handleOutsideClick = (e) => {
    const { onCloseRequest } = this.props;
    const modal = this.modalRef.current;
    if (!modal.contains(e.target)) {
      onCloseRequest();
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }

  handleCloseButton = () => {

  }

  render() {
    const { children, onCloseRequest } = this.props;
    return (
      <div styleName="modal-overlay">
        <div
          styleName="modal"
          id="trades-modal"
          ref={this.modalRef}
        >
          {children}
        </div>

        <button
          type="button"
          styleName="button-close"
          onClick={onCloseRequest}
        />
      </div>
    );
  }
}

export default Modal;
