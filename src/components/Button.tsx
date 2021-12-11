import React from 'react';

type Props = {
  color?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<Props> = ({
  children,
  color = 'gray',
  onClick = () => {},
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`py-2 px-3 font-semibold rounded-lg shadow-md text-white bg-${color}-500 hover:bg-${color}-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
