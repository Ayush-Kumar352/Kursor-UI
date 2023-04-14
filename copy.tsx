import React, { useRef } from 'react';
import Co from './copy-icon.png'

const CopyToClipboard = () => {
  const textRef = useRef(null);

  const handleCopy = () => {
    textRef.current.select();
    document.execCommand('copy');
  };

  return (
    <div style={{border: 'none'}}>
      <textarea ref={textRef} value="Selected text which will be used" style={{ position: 'absolute' , width:'300px',height:'40px', marginTop: '200px' ,left:'10px', color: 'white',backgroundColor: 'rgb(36,36,36)',opacity:'0.7' }} readOnly />
      <button onClick={handleCopy} style={{position:'absolute' , marginTop: '198px', right:'10px', backgroundColor: 'rgb(36,36,36)' ,boxShadow: '1px 1px', opacity:'0.7'}}>
        <img src={Co} alt="Copy" style={{ width: '24px', height: '24px' }} />
      </button>
    </div>
  );
};

export default CopyToClipboard;
