import React from 'react';

import styles from './Header.css';

export default () => (
    <div className={styles.container}>
        <div className={styles.background}></div>
        <div className={styles.content}>
            <div className={styles.title}>Ryan Cullinane</div>
            <div className={styles.sub}>Fullstack Developer</div>
        </div>
    </div>
);