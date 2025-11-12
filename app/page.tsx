import { About } from "@/components/about";
import { Ads } from "@/components/ads";
import { Banner } from "@/components/banner";
import { Footer } from "@/components/footer";
// import { Contact } from "@/components/contact";
import { Global } from "@/components/global";
import { Header } from "@/components/header";
import { Solutions } from "@/components/solutions";
import { Stats } from "@/components/stats";

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
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
