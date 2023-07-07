import React from 'react';

function Empty({ message }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        color: '#000',
        fontSize: '32px',
        height: '400px',
        fontWeight:'bold'
      }}
    >
      {message}
    </div>
  );
}

export default Empty;