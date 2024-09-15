import React from 'react';
import './Title.css';

function Title({ title, subtitle }) {
  return (
    <div>
      <div className='title-container'>
        <div className='title'>
          <h1>{title}</h1>
        </div>
        <div className='subtitle'>
          <h2>{subtitle}</h2>
        </div>
      </div>
    </div>
  );
}

export default Title;
