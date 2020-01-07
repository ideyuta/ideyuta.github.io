import React, {PropTypes} from 'react';
import '../css/styles.css';

const propTypes = {
  children: PropTypes.any
};

/**
 * Tmpl Component
 *
 * @param {Object} props - props
 * @return {ReactElement}
 */
export default function Tmpl(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

Tmpl.propTypes = propTypes;
