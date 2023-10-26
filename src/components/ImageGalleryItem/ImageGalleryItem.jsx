import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, onClick }) => (
  <li className={styles.galleryItem}>
    <img
      src={webformatURL}
      alt=""
      className={styles.imageSmall}
      onClick={onClick}
    />
  </li>
);

export default ImageGalleryItem;
