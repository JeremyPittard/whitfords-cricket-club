import Head from "next/head";
import Hero from "../components/Hero";
import SponsorsGrid from "../components/SponsorsGrid";
import CTA from "../components/CTA";
import Transition from "../components/Transition";
import { motion } from "framer-motion";

import { useRouter } from "next/router";

const Sponsors = () => {
  const variants = {
    initial: { opacity: 0, x: -10, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -10 },
  };
  const router = useRouter();
  return (
    <Transition>
      <Head>
        <title>Sponsors</title>
        <meta
          name="description"
          content="Cricket Club based in Padbury, Perth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Our Sponsors"
        img="url(/img/macdonald-reserve.jpg)"
        hideButton={true}
      />
      <SponsorsGrid showDetails={true} />
      <CTA />
    </Transition>
  );
};

export default Sponsors;
