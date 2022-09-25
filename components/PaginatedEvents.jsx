import React, { forwardRef } from "react";
import { Button, Spinner, SimpleGrid, Box } from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";
import Card from "./Card";
import { DummyEvents } from "../utils/dummyEvents";

const PaginatedEvents = ({
  data = DummyEvents,
  resultsPerPage,
  totalToShow,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [current, setCurrent] = React.useState(1);
  const pageSize = resultsPerPage;
  const offset = (current - 1) * pageSize;
  const posts = data.slice(offset, offset + pageSize);

  const Prev = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      Prev
    </Button>
  ));

  const Next = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      Next
    </Button>
  ));

  Prev.displayName = "Prev";
  Next.displayName = "Next";

  const itemRender = (_, type) => {
    if (type === "prev") {
      return Prev;
    }
    if (type === "next") {
      return Next;
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <Box py="20">
      <SimpleGrid px={8} mb="20" columns={{ base: 1, md: 3 }} spacing={8}>
        {posts.map((post) => (
          <Card
            title={post.title}
            img="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
            description={post.title}
            link={"/mofo_program_2009.pdf"}
            key={`event_${post.title.replaceAll(" ", "")}`}
          />
        ))}
      </SimpleGrid>
      <Pagination
        current={current}
        onChange={(page) => {
          setCurrent(page);
        }}
        pageSize={pageSize}
        total={totalToShow > 0 ? totalToShow : data.length}
        paginationProps={{
          display: "flex",
          justifyContent: "center",
        }}
        colorScheme="brand"
        hideOnSinglePage
      />
    </Box>
  );
};

export default PaginatedEvents;
