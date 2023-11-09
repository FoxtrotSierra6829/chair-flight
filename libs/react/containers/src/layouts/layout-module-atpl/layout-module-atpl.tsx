import { useRef, type FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";
import { default as TestIcon } from "@mui/icons-material/FlightTakeoffOutlined";
import { default as LearningObjectivesIcon } from "@mui/icons-material/ListOutlined";
import { default as QuestionsIcon } from "@mui/icons-material/QuizOutlined";
import { Box } from "@mui/joy";
import {
  Header,
  Sidebar,
  SidebarListItem,
  useThemeSwitcher,
} from "@chair-flight/react/components";
import type { HeaderProps, SidebarRef } from "@chair-flight/react/components";
import type { BoxProps } from "@mui/joy";

export const LayoutModuleAtpl: FunctionComponent<{
  children: React.ReactNode;
  fixedHeight?: boolean;
  slots?: {
    header?: HeaderProps;
    main?: BoxProps;
  };
}> = ({ children, fixedHeight, slots }) => {
  const [, setCurrentTheme] = useThemeSwitcher();
  const sidebarRef = useRef<SidebarRef>(null);
  const router = useRouter();
  const isQuestions = router.asPath.includes("questions");
  const isTests = router.asPath.includes("tests");
  const isLearningObjectives = router.asPath.includes("learning-objectives");
  const sidebarHeight = `calc(100vh - ${Header.css.headerHeight})`;
  const openMenu = () => sidebarRef.current?.toggleDrawer();

  useEffect(() => setCurrentTheme("blue"), [setCurrentTheme]);

  return (
    <>
      <Header
        borderStyle="outlined"
        onHamburgerClick={openMenu}
        {...slots?.header}
      />
      <Sidebar sx={{ height: sidebarHeight }} ref={sidebarRef}>
        <SidebarListItem
          href={"/modules/atpl/tests"}
          selected={isTests}
          icon={TestIcon}
          title={"Tests"}
        />
        <SidebarListItem
          href={"/modules/atpl/questions"}
          selected={isQuestions}
          icon={QuestionsIcon}
          title={"Questions"}
        />
        <SidebarListItem
          href={"/modules/atpl/learning-objectives"}
          selected={isLearningObjectives}
          icon={LearningObjectivesIcon}
          title={"Learning Objectives"}
        />
      </Sidebar>
      <Box
        component={"main"}
        children={children}
        {...slots?.main}
        sx={{
          width: Sidebar.css.remainingWidth,
          transition: Sidebar.css.widthTransition,
          marginLeft: "auto",
          p: { xs: 0.5, sm: 2 },
          ...(fixedHeight
            ? { height: sidebarHeight }
            : { minHeight: sidebarHeight }),
          ...slots?.main?.sx,
        }}
      />
    </>
  );
};
