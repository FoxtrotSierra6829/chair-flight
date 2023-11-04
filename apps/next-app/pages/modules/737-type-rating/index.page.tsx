import { AppHead, LayoutModule737 } from "@chair-flight/react/containers";
import { getTrpcHelper } from "@chair-flight/trpc/server";
import type { GetStaticProps, NextPage } from "next";

const ModuleIndexPage: NextPage = () => (
  <LayoutModule737>
    <AppHead />
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

export default ModuleIndexPage;
