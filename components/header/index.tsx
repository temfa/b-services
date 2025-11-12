"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { InstagramSvg } from "@/svgs/instagram";
import { TiktokSvg } from "@/svgs/tiktok";
import { useState } from "react";
import Close from "@/svgs/close";
import Bars from "@/svgs/bars";

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={mobile ? `${styles.mobile} ${styles.container}` : styles.container}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" width={70} height={70} alt="Logo" />
          {mobile ? <Close action={() => setMobile(false)} /> : <Bars action={() => setMobile(true)} />}
        </div>
        <div className={styles.nav}>
          <Link onClick={() => setMobile(false)} href="/">
            Home
          </Link>
          <Link onClick={() => setMobile(false)} href="/#about">
            About
          </Link>
          <Link onClick={() => setMobile(false)} href="/#services">
            Service
          </Link>
          {/* <Link href="/#contact">Contact</Link> */}
        </div>
        <div className={styles.social}>
          <Link href="https://www.instagram.com/logisticsby_bsupplies/" target="_blank">
            <InstagramSvg />
          </Link>
          <Link href="https://www.tiktok.com/@logisticsby_bsupplies" target="_blank">
            <TiktokSvg />
          </Link>
        </div>
      </div>
    </div>
  );
};
