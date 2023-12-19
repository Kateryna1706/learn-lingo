import { Backdrop, CrossClose, ModalWindow } from './Modal.styled';

const Modal = ({ children }) => {
  return (
    <Backdrop>
      <ModalWindow>
        <CrossClose />
        {children}
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;
