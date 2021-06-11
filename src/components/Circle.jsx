import React from 'react';
import { PropTypes } from 'prop-types';

const Circle = ({
  className, color, icon, loading,
}) => {
  if (loading) {
    return (
      <div className="circle circle--loading">
        <div className="circle__inner blink" />
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
  icon: null,
  loading: false,
};

Circle.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  loading: PropTypes.bool,
};

export default Circle;
