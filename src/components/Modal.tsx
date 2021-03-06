import React, { useEffect } from 'react';

type Props = {
  visible?: boolean;
  onClose?: () => void;
};

const Modal: React.FC<Props> = ({ children, visible = true, onClose }) => {
  const visibility = visible ? 'visible' : 'invisible';

  useEffect(() => {
    const escFunction = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (onClose) {
          onClose();
        }
      }
    };

    const clickOutside = (event: MouseEvent) => {
      if (onClose) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener('keydown', escFunction, false);
      document.addEventListener('click', clickOutside, false);
    }

    return () => {
      document.removeEventListener('keydown', escFunction, false);
      document.removeEventListener('click', clickOutside, false);
    };
  }, [onClose, visible]);

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`${visibility} min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover`}
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div
        className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        onClick={stopPropagation}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
