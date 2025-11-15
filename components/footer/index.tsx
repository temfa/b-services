import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { PinSvg } from "@/svgs/pin";
import { EnveloeSvg } from "@/svgs/envelope";
import { PhoneSvg } from "@/svgs/phone";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" width={70} height={70} alt="Logo" />
          <p> B SUPPLIES VENTURES is a corporate export logistics company specializing in fast and reliable international deliveries. </p>
        </div>
        <div className={styles.contact}>
          <h2>CONTACT</h2>
          <div className={styles.body}>
            <div>
              <PinSvg />
              <p>Number 44, Powerline Mowokere along ijede road, Ikorodu opposite Dele-iwa block industry.</p>
            </div>
            <div>
              <EnveloeSvg />
              <Link href="mailto:Bsuppliesventures@gmail.com">Bsuppliesventures@gmail.com</Link>
            </div>
            <div>
              <PhoneSvg />
              <Link href="tel:08067015649">08067015649</Link>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>WORKING HOURS</h2>
          <div className={styles.body}>
            <p>Monday - Saturday: 8:00am - 7:00pm </p>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>SOCIALS</h2>
          <div className={styles.body}>
            <Link href="https://www.instagram.com/logisticsby_bsupplies/" target="_blank">
              Instagram
            </Link>
            <Link href="https://www.tiktok.com/@logisticsby_bsupplies" target="_blank">
              Tiktok
            </Link>
            <Link href="https://wa.me/2348067015649" target="_blank">
              Whatsapp
            </Link>
          </div>
        </div>
      </div>
      <p>Copyright © 2025 B SHIPPING VENTURES</p>
    </div>
  );
};
