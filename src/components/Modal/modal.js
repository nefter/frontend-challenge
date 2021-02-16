import React from 'react';
import './modal.scss';

const Modal = ({modalStatus, onModalClose, children}) => {
    return modalStatus ? 
        <div className="modal">
            <div className="modal-overlay" onClick={() => onModalClose(false) }></div>
            <div className="modal-box">
                    <div className="modal-header">
                        <button onClick={() => onModalClose(false) }>x</button>
                    </div>
                    <div className="modal-content">
                        { children }
                    </div>
            </div>
        </div> : false;
}

export default Modal;
