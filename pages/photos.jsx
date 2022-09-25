import Head from "next/head";
import Hero from "../components/Hero";
import Transition from "../components/Transition";
import { SimpleGrid } from "@chakra-ui/react";
import ImageCard from "../components/ImageCard";

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
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 3,
        }}
        spacingX={8}
        spacingY={20}
        mx={"auto"}
        my={20}
        maxW={"container.xl"}
      >
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
        <ImageCard></ImageCard>
      </SimpleGrid>
    </Transition>
  );
};

export default Photos;
