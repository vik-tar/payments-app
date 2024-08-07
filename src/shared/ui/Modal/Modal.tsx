import React, {FC, PropsWithChildren} from 'react';
import './Modal.scss'

const Modal: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="modal">
      {children}
    </div>
  );
};

export default Modal;