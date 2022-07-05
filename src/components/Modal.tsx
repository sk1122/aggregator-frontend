import { useEffect } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  children: any;
}

const Modal = (props: Props) => {
  useEffect(() => console.log(props.isOpen), []);
  return (
    <div
      className={
        (props.isOpen ? '' : 'hidden ') +
        'fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-white rounded-xl'
      }
    >
      {props.children}
    </div>
  );
};

export default Modal;
