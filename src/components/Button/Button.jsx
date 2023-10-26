import React from 'react';
import styles from './Button.module.css';

export const Button = ({ onLoadMore }) => {
  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={onLoadMore} className={styles.LoadMore}>
        Load more
      </button>
    </div>
  );
};
