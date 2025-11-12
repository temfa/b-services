import React from "react";
import styles from "./styles.module.css";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.header}>
        <h3>MANAGE FROM ONE CENTER!</h3>
        <h2>From Your Country to 220 Countries</h2>
        <p>You can send fast, high quality and reasonable prices.</p>
      </div>
      <button>Continue</button>
    </div>
  );
};
