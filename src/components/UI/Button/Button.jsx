import classNames from 'classnames';
import React from 'react';
import './Button.scss'

const Button = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={classNames('button', className)}>{children}</button>
  );
};

export default Button;