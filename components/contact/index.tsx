"use client";
import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";
import { InstagramSvg } from "@/svgs/instagram";
import { TiktokSvg } from "@/svgs/tiktok";
import { WhatsappSvg } from "@/svgs/whatsapp";
import { useState } from "react";

type FormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

export const ContactBody = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const submit: SubmitHandler<FormData> = async (e) => {
    setLoading(true);
    try {
      const data = {
        name: e.fullName,
        message: e.message,
        email: e.email,
        phoneNumber: e.phoneNumber,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      console.log(options);

      await fetch(`/api/send-mail`, options);
      toast.success("Message sent Successfully!!!");
      reset();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Payment failed:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.container} id="contact">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.header}>
            <h2>Initiate Pickup</h2>
            <p>You can fill the form to your right to leave us a message or contact us through our details for an immediate response.</p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.single}>
              <h3>Email address</h3>
              <h2>bsuppliesventures@gmail.com</h2>
            </div>
            <div className={styles.single}>
              <h3>Phone numbers</h3>
              <h2>+234 8067015649</h2>
            </div>
            <div className={styles.single}>
              <h3>Social Media handles</h3>
              <div>
                <Link href="https://www.instagram.com/logisticsby_bsupplies/" target="_blank">
                  <InstagramSvg />
                </Link>
                <Link href="https://www.tiktok.com/@logisticsby_bsupplies" target="_blank">
                  <TiktokSvg />
                </Link>
                <Link href="https://wa.me/2348067015649" target="_blank">
                  <WhatsappSvg />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <form className={styles.right} onSubmit={handleSubmit(submit)}>
          <div className={styles.form}>
            <div className={styles.group}>
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Enter full name" {...register("fullName", { required: "Full Name is required" })} />
              {errors.fullName && (
                <p role="alert" className="error">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className={styles.group}>
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p role="alert" className="error">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className={styles.group}>
              <label htmlFor="">Phone number</label>
              <input type="text" placeholder="Enter Phone number" {...register("phoneNumber", { required: "Phone Number is required" })} />
              {errors.phoneNumber && (
                <p role="alert" className="error">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className={styles.group}>
              <label htmlFor="">Message</label>
              <textarea placeholder="Tell us about your request" {...register("message", { required: "Message is required" })} />
              {errors.message && (
                <p role="alert" className="error">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>
          <button type="submit">{loading ? "Loading..." : "Submit"}</button>
        </form>
      </div>
    </div>
  );
};
