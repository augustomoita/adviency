import React from 'react';

type Props = {
  color?: string;
  tone?: number;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<Props> = ({
  children,
  color = 'gray',
  tone = 500,
  onClick = () => {},
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`py-2 px-3 font-semibold rounded-lg shadow-md text-white bg-${color}-${tone} hover:bg-${color}-${
        tone + 200
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
