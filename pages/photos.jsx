import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SponsorsGrid from "../components/SponsorsGrid";
import CTA from "../components/CTA";
import Transition from "../components/Transition";

const Photos = () => {
  return (
    <Transition>
      <Head>
        <title>{`Photo's`}</title>
        <meta
          name="description"
          content="Cricket Club based in Padbury, Perth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Photo's"
        img="https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1357&q=80"
        hideButton={true}
      />
      <SponsorsGrid />
      <CTA />
    </Transition>
  );
};

export default Photos;
