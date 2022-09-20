import Head from "next/head";
import Hero from "../components/Hero";
import SponsorsGrid from "../components/SponsorsGrid";
import CTA from "../components/CTA";
import Transition from "../components/Transition";

const Yearbook = () => {
  return (
    <Transition>
      <Head>
        <title>Yearbook</title>
        <meta
          name="description"
          content="Cricket Club based in Padbury, Perth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Yearbook"
        img="https://images.unsplash.com/photo-1568290747765-1b4a44724fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
        hideButton={true}
      />
      <SponsorsGrid />
      <CTA />
    </Transition>
  );
};

export default Yearbook;
