import React from 'react';

import styles from './LoadingAnimation.module.css';

const loadingAnimation = props => (
  <div className={styles.loaderContainer}>
    <div className={styles.loader}></div>
  </div>
);

export default loadingAnimation;