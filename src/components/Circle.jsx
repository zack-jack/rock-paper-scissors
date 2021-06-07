import React from 'react';
import { PropTypes } from 'prop-types';

const Circle = ({ color, empty, icon }) => {
  if (empty) {
    return (
      <div className="circle circle--empty">
        <div className="circle__inner" />
      </div>
    );
  }

  return (
    <div className={`circle circle--${color}`}>
      <div className="circle__outer">
        <div className="circle__inner">
          {icon}
        </div>
      </div>
    </div>
  );
};

Circle.defaultProps = {
  color: '',
  empty: false,
  icon: null,
};

Circle.propTypes = {
  color: PropTypes.string,
  empty: PropTypes.bool,
  icon: PropTypes.node,
};

export default Circle;
