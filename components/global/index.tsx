import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export const Global = () => {
  return (
    <div className={styles.container}>
      <h2>Our Increasing Global Prescence</h2>
      <p>
        After experiencing the myriads of challenges sourcing from Asia we realised that we were not alone. Our team set out to build this platform to make it easy for everyone
        with a product dream to launch. We have experienced manufacturing, procurement, design, accounting, shipping and business management experts hailing from all across the
        globe armed with the tools that you can leverage on to prepare you for a truly global marketplace where low pricing and superior quality is key to competitiveness.
      </p>
      <Image width={891.81} height={533.78} alt="Globe" src="/images/globe.png" />
    </div>
  );
};
