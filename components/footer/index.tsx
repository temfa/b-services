import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { PinSvg } from "@/svgs/pin";
import { EnveloeSvg } from "@/svgs/envelope";
import { PhoneSvg } from "@/svgs/phone";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" width={70} height={70} alt="Logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d tempor incididunt ut labore et </p>
        </div>
        <div className={styles.contact}>
          <h2>CONTACT</h2>
          <div className={styles.body}>
            <div>
              <PinSvg />
              <p>Canary Wharf, United Kingdom.</p>
            </div>
            <div>
              <EnveloeSvg />
              <p>info@example.com</p>
            </div>
            <div>
              <PhoneSvg />
              <p>+234 803 456 4990</p>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>WORKING HOURS</h2>
          <div className={styles.body}>
            <p>Monday - Friday: 7:30am - 18:00pm </p>
            <p>Saturday - Sunday: 7:30am - 1:00pm</p>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>SOCIALS</h2>
          <div className={styles.body}>
            <p>Instagram</p>
            <p>Tiktok</p>
          </div>
        </div>
      </div>
      <p>Copyright © 2025 B Shipping Ventures</p>
    </div>
  );
};
