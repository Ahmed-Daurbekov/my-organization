import React from "react";
import './Input.scss'

const Input = ({placeholder, require=false}) => {
  const [value, setValue] = React.useState('')
  let placeholderRef = React.useRef()
  
  function onFocus() {
    placeholderRef.current.classList.add('active')
  }

  function onBlur(e) {
    if (e.target.value.trim() == '') {
      placeholderRef.current.classList.remove('active')
    }
  }
  
  return (
    <label className="label" >
      <span ref={placeholderRef} className='placeholder'>{placeholder} {require && <span className="required">*</span>}</span>
      <input onFocus={onFocus} onBlur={e => onBlur(e)} onChange={e => setValue(e.target.value.trim())} value={value} className='input' />
    </label>
  );
};

export default Input;