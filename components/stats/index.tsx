import React from "react";
import styles from "./styles.module.css";
import { TrophySvg } from "@/svgs/trophy";
import { ClientsSvg } from "@/svgs/client";
import { WorkersSvg } from "@/svgs/workers";
import { FlagSvg } from "@/svgs/flag";

export const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.single}>
        <TrophySvg />
        <div>
          <h2>450+</h2>
          <p>Projects Done</p>
        </div>
      </div>
      <div className={styles.single}>
        <ClientsSvg />
        <div>
          <h2>150+</h2>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className={styles.single}>
        <WorkersSvg />
        <div>
          <h2>120+</h2>
          <p>Team Workers</p>
        </div>
      </div>
      <div className={styles.single}>
        <FlagSvg />
        <div>
          <h2>20+</h2>
          <p>Year in Market</p>
        </div>
      </div>
    </div>
  );
};
