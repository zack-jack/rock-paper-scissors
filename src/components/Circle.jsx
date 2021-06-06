import React from 'react';
import { PropTypes } from 'prop-types';

const Circle = ({ color, icon }) => (
  <div className={`circle circle--${color}`}>
    <div className="circle__outer">
      <div className="circle__inner">
        {icon}
      </div>
    </div>
  </div>
);

Circle.defaultProps = {
};

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Circle;
