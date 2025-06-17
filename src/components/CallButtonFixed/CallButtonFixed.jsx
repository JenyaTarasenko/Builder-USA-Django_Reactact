import React from 'react';
import Phone from '../../assets/image/phone_black.svg';
const CallButtonFixed = () => {
  return (
    <a
      href="tel:231-439-7166"
      className="rounded-circle shadow d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: 'rgb(255, 193, 7)',
        position: 'fixed',
        bottom: '70px',
        right: '12px',
        width: '60px',
        height: '60px',
        zIndex: 9999,
        fontSize: '24px',
      }}
      aria-label="Позвонить"
    >
    <img src={Phone} />
    </a>
  );
};

export default CallButtonFixed;