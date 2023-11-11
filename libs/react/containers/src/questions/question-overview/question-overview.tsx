import { Fragment, useEffect, useMemo, useState } from "react";
import { tabPanelClasses } from "@mui/base";
import { default as OpenInNewIcon } from "@mui/icons-material/OpenInNew";
import { default as RefreshIcon } from "@mui/icons-material/Refresh";
import {
  Button,
  Divider,
  Link,
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  Table,
  Tabs,
  Typography,
  dividerClasses,
  tabClasses,
  tabListClasses,
} from "@mui/joy";
import {
  getQuestion,
  getQuestionPreview,
  getRandomId,
  getRandomShuffler,
} from "@chair-flight/core/app";
import {
  ImageViewer,
  MarkdownClient,
  QuestionMultipleChoice,
  Ups,
} from "@chair-flight/react/components";
import { trpc } from "@chair-flight/trpc/client";
import type { QuestionTemplateId } from "@chair-flight/base/types";
import type {
  DrawingPoints,
  QuestionMultipleChoiceStatus as Status,
} from "@chair-flight/react/components";
import type { TabProps } from "@mui/joy";
import type { FunctionComponent } from "react";

type DrawingPointsMap = Record<string, DrawingPoints[]>;
type TabName = "question" | "explanation" | "meta" | "variants";

const shuffle = getRandomShuffler("123");

export type QuestionOverviewProps = {
  questionId: QuestionTemplateId;
  variantId?: string;
  seed?: string;
  onQuestionChanged?: (args: { variantId: string; seed: string }) => void;
  questionBank: "Atpl" | "737";
} & Pick<TabProps, "sx" | "className" | "style" | "component">;

/**
 * Self contained component to review a question.
 * Component can be left uncontrolled, but the seed and variantId if supplied
 * make the component controlled.
 *
 * Uses TRPC to fetch the question data.
 */
export const QuestionOverview: FunctionComponent<QuestionOverviewProps> = ({
  questionId,
  variantId: initialVariantId,
  seed: initialSeed,
  onQuestionChanged,
  questionBank,
  ...props
}) => {
  const bank = `questionBank${questionBank}` as const;
  const useQuestion = trpc[bank].getQuestion.useSuspenseQuery;

  const [tab, setTab] = useState<TabName>("question");
  const [questionData] = useQuestion({ questionId });
  const [seed, setSeed] = useState<string>(initialSeed ?? getRandomId());
  const [variantId, setVariantId] = useState(initialVariantId);
  const [selectedOption, setSelectedOption] = useState<string>();
  const [currentAnnex, setCurrentAnnex] = useState<string>();
  const [selectedStatus, setSelectedStatus] = useState<Status>("in-progress");
  const [annexDrawings, setAnnexDrawings] = useState<DrawingPointsMap>({});

  const questionTemplate = questionData.questionTemplate;
  const allVariantsMap = questionData.questionTemplate.variants;
  const learningObjectives = questionData.learningObjectives;
  const allVariantsArray = Object.values(allVariantsMap);
  const variant = allVariantsMap[variantId ?? ""] ?? allVariantsArray[0];
  const externalReferences = variant.externalIds;
  const showMeta = !!learningObjectives.length;
  const showExplanation = !!questionTemplate.explanation;
  const dividerWidth = "sm" as const;

  const question = useMemo(
    () => getQuestion(questionTemplate, { variantId, seed }),
    [variantId, questionTemplate, seed],
  );

  const randomizedOptions = useMemo(
    () => getRandomShuffler(seed ?? "")(question.options),
    [question, seed],
  );

  const navigateToVariant = (variantId: string, seed: string) => {
    setSelectedOption(undefined);
    setVariantId(variantId);
    setTab("question");
    setSelectedStatus("in-progress");
    setSeed(seed);
    onQuestionChanged?.({ seed, variantId });
  };

  useEffect(() => {
    if (initialSeed) setSeed(initialSeed);
    if (initialVariantId) setVariantId(initialVariantId);
  }, [initialSeed, initialVariantId]);

  return (
    <Tabs
      {...props}
      value={tab}
      onChange={(_, v) => setTab(v as TabName)}
      sx={{
        backgroundColor: "initial",

        [`& .${tabClasses.root}`]: {
          backgroundColor: "transparent",
          flex: "initial",
          height: (t) => t.spacing(5),
          border: "none",
          fontWeight: 500,

          "&:hover": {
            backgroundColor: "transparent",
          },

          [`&.${tabClasses.selected}`]: {
            color: "primary.plainColor",
            backgroundColor: "initial",
            "&::after": {
              height: 2,
              borderTopLeftRadius: 3,
              borderTopRightRadius: 3,
              bgcolor: "primary.500",
            },
          },
        },

        [`& .${tabListClasses.root}`]: {
          justifyContent: "center",
          width: "100%",
          maxWidth: dividerWidth,
          margin: "auto",
        },

        [`& .${tabPanelClasses.root}`]: {
          backgroundColor: "initial",
          width: "100%",
          margin: "auto",
        },

        [`& .${dividerClasses.root}`]: {
          maxWidth: dividerWidth,
          margin: "auto",
          my: 2,
        },

        ...props.sx,
      }}
    >
      <TabList>
        <Tab indicatorInset value={"question"}>
          Question
        </Tab>
        <Tab indicatorInset value={"explanation"}>
          Explanation
        </Tab>
        {showMeta && <Tab value={"meta"}>Meta</Tab>}
        <Tab indicatorInset value={"variants"}>
          Variants
        </Tab>
      </TabList>
      <TabPanel value={"question"} sx={{ maxWidth: "md" }}>
        <QuestionMultipleChoice
          sx={{ p: 0 }}
          question={question.question}
          correctOptionId={question.correctOptionId}
          selectedOptionId={selectedOption}
          status={selectedStatus}
          disabled={selectedStatus === "show-result"}
          options={randomizedOptions.map((option) => ({
            optionId: option.id,
            text: option.text,
          }))}
          onOptionClicked={(optionId) => {
            setSelectedOption(optionId);
            setSelectedStatus("show-result");
          }}
          annexes={question.annexes}
          onAnnexClicked={(annex) => setCurrentAnnex(annex)}
        />
        <ImageViewer
          open={currentAnnex !== undefined}
          onClose={() => setCurrentAnnex(undefined)}
          drawings={annexDrawings[currentAnnex ?? ""] ?? []}
          onDrawingsChanged={(newDrawings) =>
            setAnnexDrawings((oldDrawings) => ({
              ...oldDrawings,
              [currentAnnex ?? ""]: newDrawings,
            }))
          }
          onUndo={() =>
            setAnnexDrawings((old) => ({
              ...old,
              [currentAnnex ?? ""]: (old[currentAnnex ?? ""] ?? []).slice(
                0,
                -1,
              ),
            }))
          }
          onReset={() =>
            setAnnexDrawings((old) => ({
              ...old,
              [currentAnnex ?? ""]: [],
            }))
          }
          imgSrc={currentAnnex ?? ""}
        />
        <Button
          children={<RefreshIcon />}
          sx={{
            width: (theme) => theme.spacing(5),
            height: (theme) => theme.spacing(5),
            borderRadius: "50%",
            position: "fixed",
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2),
          }}
          onClick={() =>
            navigateToVariant(shuffle(allVariantsArray)[0].id, getRandomId())
          }
        />
        <Divider />
      </TabPanel>
      <TabPanel value={"explanation"} sx={{ maxWidth: "lg" }}>
        {showExplanation ? (
          <MarkdownClient>
            {[
              variant.explanation,
              "\n\n---\n\n",
              questionTemplate.explanation,
            ].join("")}
          </MarkdownClient>
        ) : (
          <Ups message="No explanation to this question is available" />
        )}
        <Divider />
      </TabPanel>
      <TabPanel value={"meta"} sx={{ maxWidth: "lg" }}>
        <Typography level="h4" sx={{ mt: 2 }}>
          Learning Objectives
        </Typography>
        <Divider />
        <Table aria-label="Learning Objectives">
          <thead>
            <tr>
              <th style={{ width: "8em" }}>id</th>
              <th>text</th>
            </tr>
          </thead>
          <tbody>
            {learningObjectives.map((lo) => (
              <tr key={lo.id}>
                <td>
                  <Link href={lo.href} children={lo.id} />
                </td>
                <td>
                  <MarkdownClient children={lo.text} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Typography level="h4">External References</Typography>
        <Divider />
        <List aria-label="basic-list">
          {externalReferences
            .sort((a, b) => a.localeCompare(b))
            .map((ref) => (
              <ListItem key={ref}>
                <Link href={""} disabled>
                  <span>{ref}</span>
                  <OpenInNewIcon sx={{ ml: 1 }} />
                </Link>
              </ListItem>
            ))}
        </List>
        <Divider />
      </TabPanel>
      <TabPanel value={"variants"} sx={{ maxWidth: "lg" }}>
        {allVariantsArray.map(({ id }) => {
          const preview = getQuestionPreview(questionTemplate, id);
          return (
            <Fragment key={id}>
              <MarkdownClient children={preview} />
              <Button
                sx={{ mb: 2, mx: "auto" }}
                children="Generate This Variant"
                variant="outlined"
                onClick={() => navigateToVariant(id, getRandomId())}
              />
            </Fragment>
          );
        })}
        <Divider />
      </TabPanel>
    </Tabs>
  );
};