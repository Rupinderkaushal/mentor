import React from 'react';
import Button from './Button/Button';
import ContentDiv from './ContentDiv/ContentDiv';
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className='homepage-wrapper'>
        <ContentDiv/>
        <Button/>
    </div>
  )
}

export default HomePage