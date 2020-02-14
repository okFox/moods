import React from 'react';
import styles from './Face.css';
import PropTypes from 'prop-types';

const Face = ({ emoji }) => {

  return <p className={styles.Face}>{emoji}</p>;
};

Face.propTypes = {
  emoji: PropTypes.string.isRequired
};

export default Face;
