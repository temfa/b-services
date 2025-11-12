import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { InstagramSvg } from "@/svgs/instagram";
import { TiktokSvg } from "@/svgs/tiktok";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" width={70} height={70} alt="Logo" />
        </div>
        <div className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#services">Service</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div className={styles.social}>
          <InstagramSvg />
          <TiktokSvg />
        </div>
      </div>
    </div>
  );
};
