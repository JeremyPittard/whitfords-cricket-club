import Head from "next/head";
import Hero from "../components/Hero";
import Transition from "../components/Transition";
import Card from "../components/Card";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Feature from "../components/Feature";

const Yearbook = () => {
  let dummyContent = `How could you?! Haven't you learned anything from that guy who gives those sermons at church? Captain Whatshisname? We live in a society of laws! Why do you think I took you to all those Police Academy movies? For fun? Well, I didn't hear anybody laughing, did you? Except at that guy who made sound effects. Makes sound effects and laughs. Where was I? Oh yeah! Stay out of my booze.`;
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
      <Feature
        title="Yearbook"
        content={dummyContent}
        showButton={false}
        img="https://images.unsplash.com/photo-1630395822970-acd6a691d97e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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

export default Yearbook;
