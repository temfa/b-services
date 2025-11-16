import { About } from "@/components/about";
import { Ads } from "@/components/ads";
import { Banner } from "@/components/banner";
import { ContactBody } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Global } from "@/components/global";
import { Header } from "@/components/header";
import { Solutions } from "@/components/solutions";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Ads />
      <About />
      <Solutions />
      <Stats />
      <Global />
      <ContactBody />
      <Testimonials />
      <Footer />
    </>
  );
}
