import Head from "next/head";
import Hero from "../components/Hero";
import Transition from "../components/Transition";
import { SimpleGrid } from "@chakra-ui/react";
import Feature from "../components/Feature";
import Card from "../components/Card";
import { DummyEvents as dummyEvents } from "../utils/dummyEvents";
import PaginatedEvents from "../components/PaginatedEvents";

const Events = () => {
  const dummyContent = `
  It's a T. It goes "tuh". Yes. You gave me a dollar and some candy. THE BIG BRAIN AM WINNING AGAIN! I AM THE GREETEST! NOW I AM LEAVING EARTH, FOR NO RAISEN! This is the worst part. The calm before the battle.
It doesn't look so shiny to me. I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! What's with you kids? Every other day it's food, food, food. Alright, I'll get you some stupid food.
  `;
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
      <Feature
        title="Upcoming Events"
        content={dummyContent}
        showButton={false}
        img="https://images.unsplash.com/photo-1630395822970-acd6a691d97e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <PaginatedEvents data={dummyEvents} resultsPerPage={6} />

      <Feature
        title="Past Events"
        content={dummyContent}
        rightImage={false}
        showButton={false}
        img="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      />
      <PaginatedEvents data={dummyEvents} resultsPerPage={6} />
    </Transition>
  );
};

export default Events;
