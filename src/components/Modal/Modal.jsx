import { useEffect } from 'react';
import { Backdrop, CrossClose, ModalWindow } from './Modal.styled';

const Modal = ({ children, closeModal }) => {
  
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return (
    <Backdrop onClick={closeModal}>
      <ModalWindow>
        <CrossClose onClick={closeModal} />
        {children}
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;
