import React from 'react';
import './Select.scss'

const Select = ({children}) => {
  const [activeSelect, setActiveSelect] = React.useState(false)
  
  return (
    <label>
      <select onClick={() => setActiveSelect(!activeSelect)}  className='select'>
        {children}
      </select>

      <svg className={activeSelect ? 'active' : ''} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.05806 5.80806C2.30214 5.56398 2.69786 5.56398 2.94194 5.80806L10 12.8661L17.0581 5.80806C17.3021 5.56398 17.6979 5.56398 17.9419 5.80806C18.186 6.05214 18.186 6.44786 17.9419 6.69194L10.4419 14.1919C10.1979 14.436 9.80214 14.436 9.55806 14.1919L2.05806 6.69194C1.81398 6.44786 1.81398 6.05214 2.05806 5.80806Z" fill="#ADB4BD"/>
      </svg>
    </label>
  );
};

export default Select;