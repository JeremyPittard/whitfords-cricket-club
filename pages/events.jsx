import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SponsorsGrid from "../components/SponsorsGrid";
import CTA from "../components/CTA";
import Transition from "../components/Transition";

const Events = () => {
  return (
    <Transition>
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="Cricket Club based in Padbury, Perth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Events"
        img="https://images.unsplash.com/photo-1585822754398-04873d4e1f50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1367&q=80"
        hideButton={true}
      />
      <SponsorsGrid />
      <CTA />
    </Transition>
  );
};

export default Events;
