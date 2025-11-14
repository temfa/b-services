import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.body} data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
        <div className={styles.head}>
          <h2>B SUPPLIES VENTURES</h2>
          <p>Our Journey Towards Excellence in Logistics and Supply Chain Solutions</p>
        </div>
        <div className={styles.content}>
          <div>
            <p>
              B SUPPLIES VENTURES is a corporate export logistics company specializing in fast and reliable international deliveries. We make global shipping seamless offering
              48–72 hour express, door to door delivery with full tracking access for total shipment visibility and peace of mind.
            </p>
            <p>
              We provide secure, efficient and professional export solutions for entrepreneurs, fashion brands, African diaspora, foodstuff suppliers, cosmetic vendors and many
              more industries that rely on timely movement of good. At B SUPPLIES VENTURES, our priority is speed, accuracy and world class service every single time.
            </p>
          </div>
          <Link href="/#contact">Contact Us</Link>
        </div>
      </div>
      <Image
        src="/images/b.jpeg"
        width={690}
        height={690}
        alt="truck"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-easing="ease-in"
        data-aos-mirror="true"
        data-aos-once="false"
      />
    </div>
  );
};
