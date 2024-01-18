import { AppHead } from "@chair-flight/react/components";
import {
  LayoutModule,
  LearningObjectiveOverview,
} from "@chair-flight/react/containers";
import { ssrHandler } from "@chair-flight/trpc/server";
import type { QuestionBankName } from "@chair-flight/base/types";
import type { Breadcrumbs } from "@chair-flight/react/containers";
import type { NextPage } from "next";

type PageParams = {
  questionBank: QuestionBankName;
  learningObjectiveId: string;
};

type PageProps = {
  questionBank: QuestionBankName;
  learningObjectiveId: string;
};

export const Page: NextPage<PageProps> = ({
  questionBank,
  learningObjectiveId,
}) => {
  const crumbs = [
    [questionBank.toUpperCase(), `/modules/${questionBank}`],
    ["Learning Objectives", `/modules/${questionBank}/learning-objectives`],
    learningObjectiveId,
  ] as Breadcrumbs;

  return (
    <LayoutModule questionBank={questionBank} breadcrumbs={crumbs}>
      <AppHead />
      <LearningObjectiveOverview
        sx={{ p: 2 }}
        questionBank={questionBank}
        learningObjectiveId={learningObjectiveId}
      />
    </LayoutModule>
  );
};

export const getServerSideProps = ssrHandler<PageProps, PageParams>(
  async ({ helper, params }) => {
    await Promise.all([
      LayoutModule.getData({ params, helper }),
      LearningObjectiveOverview.getData({ params, helper }),
    ]);
    return { props: params };
  },
);

export default Page;