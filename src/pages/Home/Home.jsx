import React from 'react';
import './Home.css';
import Title from '../../components/Title/Title';

export const Home = () => {
  return (
    <div>
      <div className='hero'>
        <div className='hero-text'>
          <h1>Your Leash is to boring ?</h1>
          <p>No Problem! Here is something waiting for you </p>
        </div>
      </div>
      <Title title='Bestseller' subtitle='Only the best for you' />
    </div>
  );
};
