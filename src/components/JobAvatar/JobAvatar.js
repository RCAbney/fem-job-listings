import React from "react";
import styles from "./JobAvatar.module.css";

const JobAvatar = ({ imgSrc, altText, mobile = false }) => {
  return (
    <img
      className={mobile ? styles.avatarMobile : styles.avatar}
      src={imgSrc}
      alt={altText}
    />
  );
};

export default JobAvatar;
