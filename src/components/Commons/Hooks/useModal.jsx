import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

const ModalStyled = styled.div`
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
}
.modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  min-width: 300px;
}

.modal {
  z-index: 4;
  background: white;
  position: relative;
  margin: 0 auto;
  border-radius: 4px;
  padding: 8px;
}

.modal-header {
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.modal-close-button {
  position: absolute;
  float: right;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  border-radius: 100%;
  color: #000;
  opacity: .3;
  cursor: pointer;
  border: none;
  z-index: 5;
}
`;

export const ModalButton = ({ toggle, children }) => {
    const ModalButtonWrap = styled.span`
    position: relative;
`;
  return (
      <ModalButtonWrap
        onClick={toggle}>
        {children}
      </ModalButtonWrap>
  )
};

export const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
  
    function toggle() {
      setIsShowing(!isShowing);
    }
  
    return {
      isShowing,
      toggle,
    }
  };
  
export const ModalContent = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
     <ModalStyled>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {children}
        </div>
      </div>
      </ModalStyled>
    </React.Fragment>, document.body
  ) : null;
  