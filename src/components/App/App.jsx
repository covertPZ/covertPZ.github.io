import React from 'react';

import Header from '../Header';
import Resume from '../Resume';

import styles from './App.css';

export default () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.wrapper}>
      <Resume />
    </div>
  </div>
);
