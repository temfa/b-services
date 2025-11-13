import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export const Solutions = () => {
  return (
    <div className={styles.wrapper} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Services</h2>
          {/* <p>Seamless Transportation and Supply Chain Management Across Land, Air, and Sea</p> */}
        </div>
        <div className={styles.body}>
          <div className={styles.left}>
            <Image
              src="/images/ocean.png"
              width={535}
              height={450}
              alt="Air"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <div data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
              <h2>Sea Freight</h2>
              <p>
                We also offer ocean freight, depending on your choice of transportation from 20ft to 40ft containers. We can also deliver your shipment to your doorstep either a
                vehicle or bulky item. Terms and conditions applies.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
              <h2>Road Transport</h2>
              <p>
                We also offer Road Transportation, depending on your choice of transportation from 20ft to 40ft containers. We can also deliver your shipment to your doorstep
                either a vehicle or bulky item. Terms and conditions applies.
              </p>
            </div>
            <Image
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
              src="/images/ground.png"
              width={535}
              height={450}
              alt="Air"
            />
          </div>
          <div className={styles.left}>
            <Image
              src="/images/air.png"
              width={535}
              height={450}
              alt="Air"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
            />
            <div data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
              <h2>Air Freight</h2>
              <p>
                When you need your shipment at any destination of your choice in the shortest possible time; then be rest assured we will fly it for you. Forget about paying
                outrageous shipping fees as we offer fast, affordable and stress shipping and free package forwarding services.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in" data-aos-mirror="true" data-aos-once="false">
              <h2>Car Accessories</h2>
              <p>
                We also sell Quality Car Accessories Everything you need to upgrade and protect your car. Affordable, Durable, Stylish ranging from Car batteries, Tyres Alloy rims
                Lubricants, etc.
              </p>
            </div>
            <Image
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
              data-aos-mirror="true"
              data-aos-once="false"
              src="/images/car.png"
              width={535}
              height={450}
              alt="Air"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
