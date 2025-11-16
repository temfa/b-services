import React from "react";
import styles from "./styles.module.css";
import { StarSvg } from "@/svgs/star";

export const Testimonials = () => {
  return (
    <div className={styles.container}>
      <h2>
        <span>Customer Feedback:</span> The Proof of Our Moving Excellence
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.single}>
          <div className={styles.head}>
            <div />
            <h2>01</h2>
          </div>
          <div className={styles.body}>
            <div className={styles.top}>
              <div>
                {[0, 1, 2, 3, 4]?.map((_, index) => {
                  return <StarSvg key={index} />;
                })}
              </div>
              <p>
                Incredibly Swift Deliveries.This logistics company is the best we’ve worked with. We frequently ship to Europe and Asia, and they always deliver faster than other
                providers. Their team is responsive and efficient—perfect for time-sensitive shipments.
              </p>
            </div>
            <div className={styles.line} />
            <p>Lawal Rosheed</p>
          </div>
        </div>
        <div className={styles.single}>
          <div className={styles.head}>
            <div />
            <h2>02</h2>
          </div>
          <div className={styles.body}>
            <div className={styles.top}>
              <div>
                {[0, 1, 2, 3, 4]?.map((_, index) => {
                  return <StarSvg key={index} />;
                })}
              </div>
              <p>
                I was very happy with B Supplies ventures company for ensuring that my packages were delivered expressly to Canada within 4 days via DHL. Thanks so much for a good
                customer service. I love your kind gestures keep it up 👍
              </p>
            </div>
            <div className={styles.line} />
            <p>Elizabeth Ebenezer</p>
          </div>
        </div>
        <div className={styles.single}>
          <div className={styles.head}>
            <div />
            <h2>03</h2>
          </div>
          <div className={styles.body}>
            <div className={styles.top}>
              <div>
                {[0, 1, 2, 3, 4]?.map((_, index) => {
                  return <StarSvg key={index} />;
                })}
              </div>
              <p>
                Our experience with B SUPPLIES VENTURES has been fantastic. Their international deliveries via DHL are impressively fast, my Sister in-law got her packages in
                Canada within 4 days.
              </p>
            </div>
            <div className={styles.line} />
            <p>Dauda Olamide</p>
          </div>
        </div>
      </div>
    </div>
  );
};
