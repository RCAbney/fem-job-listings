import React from "react";
import styles from "./Pill.module.css";

const Pill = ({ title, featured = false }) => {
  return (
    <span
      className={styles.pill}
      style={
        featured ? { backgroundColor: "#000" } : { backgroundColor: "#5ca5a5" }
      }
    >
      {title.toUpperCase()}
    </span>
  );
};

export default Pill;
