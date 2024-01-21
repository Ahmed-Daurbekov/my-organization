import React from 'react';
import './Textarea.scss'

const Textarea = ({placeholder, children, require=false}) => {
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
    <label className="label">
      <span ref={placeholderRef} className='placeholder'>{placeholder} {require && <span className="required">*</span>}</span>
      <textarea onFocus={onFocus} onBlur={e => onBlur(e)} onChange={e => setValue(e.target.value)} className='textarea' value={value}>{children}</textarea>
    </label>
  );
};

export default Textarea;