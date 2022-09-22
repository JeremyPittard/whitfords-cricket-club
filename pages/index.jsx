import Head from "next/head";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import SponsorsGrid from "../components/SponsorsGrid";
import CTA from "../components/CTA";
import Transition from "../components/Transition";
import Card from "../components/Card";

const Home = () => {
  const dummyContent = `No. We're on the top. Guess again. Who are those horrible orange men? No, I'm Santa Claus! I don't know what you did, Fry, but once again, you screwed up! Now all the planets are gonna start cracking wise about our mamas.
  WINDMILLS DO NOT WORK THAT WAY! GOOD NIGHT! Then we'll go with that data file! Meh. And when we woke up, we had these bodies. There's one way and only one way to determine if an animal is intelligent. Dissect its brain!`;
  return (
    <Transition>
      <Head>
        <title>Whitfords Cricket Club</title>
        <meta
          name="description"
          content="Cricket Club based in Padbury, Perth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        title="Whitfords Cricket Club"
        img="url(/img/macdonald-reserve.jpg)"
        isLarge={true}
      />
      <Feature
        title="Who We Are"
        content={dummyContent}
        img="https://images.unsplash.com/photo-1589801258579-18e091f4ca26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80"
      />
      <Feature
        title="Team One"
        content={dummyContent}
        rightImage={false}
        img="https://images.unsplash.com/photo-1631194758628-71ec7c35137e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
      />
      <Feature
        title="Team Two"
        content={dummyContent}
        img="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
      />
      <SponsorsGrid showDetails={false} />
      <CTA />
    </Transition>
  );
};

export default Home;
