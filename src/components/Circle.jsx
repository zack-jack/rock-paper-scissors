import React from 'react';
import { PropTypes } from 'prop-types';

const Circle = ({
  className, color, empty, icon,
}) => {
  if (empty) {
    return (
      <div className="circle circle--empty">
        <div className="circle__inner" />
      </div>
    );
  }

  return (
    <div className={`circle circle--${color} ${className}`}>
      <div className="circle__outer">
        <div className="circle__inner">
          {icon}
        </div>
      </div>
    </div>
  );
};

Circle.defaultProps = {
  className: '',
  color: '',
  empty: false,
  icon: null,
};

Circle.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  empty: PropTypes.bool,
  icon: PropTypes.node,
};

export default Circle;
