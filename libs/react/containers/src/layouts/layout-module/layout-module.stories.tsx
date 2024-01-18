import { trpcMsw } from "@chair-flight/trpc/mock";
import { LayoutModule } from "./layout-module";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof LayoutModule>;

export const Playground: Story = {};

const meta: Meta<typeof LayoutModule> = {
  title: "Containers/Layouts/LayoutModule",
  component: LayoutModule,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
    msw: {
      handlers: [
        trpcMsw.questionBank.getConfig.query(() => ({
          hasFlashcards: true,
          hasQuestions: true,
          hasLearningObjectives: true,
          hasMedia: true,
        })),
      ],
    },
  },
};

export default meta;