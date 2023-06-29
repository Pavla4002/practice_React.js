import React from 'react';
import styles from './index.module.css'
const Spinner = () => {
    return (
        <div className={styles.spinnerStyle}>
            <span>Loading...</span>
        </div>
    );
};

export default Spinner;