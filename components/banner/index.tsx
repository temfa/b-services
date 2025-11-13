import styles from "./styles.module.css";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.header}>
        <h3>MANAGE FROM ONE CENTER!</h3>
        <h2>From Your Country to 220 Countries</h2>
        <p>You can send fast, high quality and reasonable prices.</p>
      </div>
      <Link href="/#contact">Initate Pickup</Link>
    </div>
  );
};
