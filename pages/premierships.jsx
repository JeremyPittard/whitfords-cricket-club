import Head from "next/head";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Transition from "../components/Transition";
import { SimpleGrid } from "@chakra-ui/react";
import Feature from "../components/Feature";
const Premierships = () => {
  const dummyContent = `
  Shut up and get to the point! I saw you with those two "ladies of the evening" at Elzars. Explain that. Hey, tell me something. You've got all this money. How come you always dress like you're doing your laundry?
That's right, baby. I ain't your loverboy Flexo, the guy you love so much. You even love anyone pretending to be him! Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it?
  `;
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
      <Feature
        title="Our Success"
        content={dummyContent}
        showButton={false}
        img="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
      />
      <SimpleGrid px={8} py={20} columns={{ base: 1, md: 3 }} spacing={8}>
        <Card
          title="Yearbook 1"
          img="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
          description={"quick year summary to go here"}
          link={"/mofo_program_2009.pdf"}
        />
        <Card
          title="Yearbook 1"
          img="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
          description={"quick year summary to go here"}
          link={"/mofo_program_2009.pdf"}
        />
        <Card
          title="Yearbook 1"
          img="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
          description={"quick year summary to go here"}
          link={"/mofo_program_2009.pdf"}
        />
      </SimpleGrid>
    </Transition>
  );
};

export default Premierships;
