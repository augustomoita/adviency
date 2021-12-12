import React from 'react';

type Props = {
  visible?: boolean;
};

const Modal: React.FC<Props> = ({ children, visible = true }) => {
  const visibility = visible ? 'visible' : 'invisible';
  return (
    <div
      className={`${visibility} min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover`}
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
