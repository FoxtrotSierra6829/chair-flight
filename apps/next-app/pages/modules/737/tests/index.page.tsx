import {
  AppHead,
  LayoutModule737,
  TestsOverview,
} from "@chair-flight/react/containers";
import { getTrpcHelper } from "@chair-flight/trpc/server";
import type { GetStaticProps, NextPage } from "next";

const TestsIndexPage: NextPage = () => (
  <LayoutModule737>
    <AppHead />
    <TestsOverview component={"section"} questionBank="737" />
  </LayoutModule737>
);

export const getStaticProps: GetStaticProps = async () => {
  const helper = await getTrpcHelper();
  return {
    props: {
      trpcState: helper.dehydrate(),
    },
  };
};

export default TestsIndexPage;