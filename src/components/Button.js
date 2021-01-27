import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className='btn'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Button;
