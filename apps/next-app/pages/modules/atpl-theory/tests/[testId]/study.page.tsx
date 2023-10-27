import { NoSsr } from "@mui/base";
import { Box, Sheet, Skeleton } from "@mui/joy";
import { Header, AppLayout } from "@chair-flight/react/components";
import {
  AppHead,
  TestQuestionNavigation,
  TestQuestionStudy,
  useTestHotkeys,
  useTestProgressTime,
} from "@chair-flight/react/containers";
import type { GetServerSideProps, NextPage } from "next";

type StudyPageProps = {
  testId: string;
};

export const StudyPage: NextPage<StudyPageProps> = ({ testId }) => {
  useTestHotkeys({ testId });
  useTestProgressTime({ testId });

  return (
    <>
      <AppHead />
      <Header>
        <Box display={{ xs: "flex", md: "none" }} flexDirection={"column"}>
          <NoSsr>
            <TestQuestionNavigation testId={testId} />
          </NoSsr>
        </Box>
      </Header>
      <AppLayout.Main>
        <AppLayout.MainGrid sx={{ maxWidth: 3000, margin: "auto" }}>
          <AppLayout.MainGridFixedColumn
            xs={12}
            md={8}
            lg={9}
            sx={{ justifyContent: "flex-start" }}
          >
            <NoSsr fallback={<Skeleton height={"500px"} />}>
              <TestQuestionStudy testId={testId} />
            </NoSsr>
          </AppLayout.MainGridFixedColumn>
          <AppLayout.MainGridFixedColumn
            xs={0}
            md={4}
            lg={3}
            sx={{
              justifyContent: "flex-start",
              display: { xs: "none", md: "flex" },
            }}
          >
            <NoSsr fallback={<Skeleton height={"350px"} />}>
              <Sheet variant="outlined" sx={{ p: 2 }}>
                <TestQuestionNavigation testId={testId} />
              </Sheet>
            </NoSsr>
          </AppLayout.MainGridFixedColumn>
        </AppLayout.MainGrid>
      </AppLayout.Main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<StudyPageProps> = async (
  ctx,
) => {
  const testId = ctx.params?.["testId"];
  if (typeof testId !== "string") return { notFound: true };

  return {
    props: {
      testId,
    },
  };
};

export default StudyPage;