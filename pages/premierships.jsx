import Head from "next/head";
import Hero from "../components/Hero";
import SponsorsGrid from "../components/SponsorsGrid";
import CTA from "../components/CTA";
import Transition from "../components/Transition";
const Premierships = () => {
  return (
    <Transition>
      <Head>
        <title>premierships</title>
        <meta
          name="description"
          content="Cricket Club based in Padbury, Perth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="premierships"
        img="https://images.unsplash.com/photo-1624194697120-34347cff8b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80"
        hideButton={true}
      />
      <SponsorsGrid />
      <CTA />
    </Transition>
  );
};

export default Premierships;
