import React from "react";
import styles from "./Tag.module.css";

const Tag = ({ tagTitle, handleTagClick }) => {
  return (
    <div className={styles.tag} onClick={() => handleTagClick(tagTitle)}>
      <p className={styles.tagTitle}>{tagTitle}</p>
    </div>
  );
};

export default Tag;
