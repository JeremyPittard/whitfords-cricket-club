import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ThreeColumnContent from "../components/ThreeColumnContent";
import SideContent from "../components/SideContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whitfords Cricket Club</title>
        <meta
          name="description"
          content="Cricket Club based in Padbury, Perth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ThreeColumnContent />
      <SideContent />
      <Footer />
    </div>
  );
}
