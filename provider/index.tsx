"use client";
// import Loader from "@/components/loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);
  return <div style={{ margin: 0, padding: 0 }}>{children}</div>;
}
