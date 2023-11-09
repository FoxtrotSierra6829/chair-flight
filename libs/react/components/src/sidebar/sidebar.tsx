import { forwardRef, useImperativeHandle } from "react";
import { default as ChevronLeftIcon } from "@mui/icons-material/ChevronLeft";
import {
  Box,
  GlobalStyles,
  List,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Sheet,
  listClasses,
  listItemButtonClasses,
  listItemContentClasses,
  listItemDecoratorClasses,
  useTheme,
} from "@mui/joy";
import { create } from "zustand";
import { HEADER_HEIGHT } from "../constants";
import { useMediaQuery } from "../hooks/use-media-query";
import type { SidebarListItemProps } from "./sidebar-list-item";
import type { SheetProps } from "@mui/joy";
import type { ReactElement } from "react";

export type SidebarProps = {
  children: ReactElement<SidebarListItemProps>[];
  sx?: SheetProps["sx"];
  className?: SheetProps["className"];
};

export type SidebarRef = HTMLDivElement & {
  toggleDrawer: () => void;
};

export type SidebarComponent = React.ForwardRefExoticComponent<
  SidebarProps & React.RefAttributes<SidebarRef>
> & {
  css: {
    remainingWidth: string;
    widthTransition: string;
  };
};

const VAR_SIDEBAR_WIDTH = "--joy-sidebar-width";
const VAR_SIDEBAR_REMAINING_WIDTH = "--joy-sidebar-remaining-width";
const SIDEBAR_EXPANDED_WIDTH = 210;
const SIDEBAR_COLLAPSED_WIDTH = 42;

const useSidebarStore = create<{
  isMobileOpen: boolean;
  isDesktopOpen: boolean;
  setMobileOpen: (isMobileOpen: boolean) => void;
  setDesktopOpen: (isDesktopOpen: boolean) => void;
}>((set) => ({
  isMobileOpen: false,
  isDesktopOpen: true,
  setMobileOpen: (isMobileOpen) => set({ isMobileOpen }),
  setDesktopOpen: (isDesktopOpen) => set({ isDesktopOpen }),
}));

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ children = [], ...otherProps }, ref) => {
    const { isMobileOpen, isDesktopOpen, setMobileOpen, setDesktopOpen } =
      useSidebarStore();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isOpen = isSmallScreen ? isMobileOpen : isDesktopOpen;

    useImperativeHandle(
      ref,
      () =>
        ({
          toggleDrawer: () => setMobileOpen(!isMobileOpen),
        }) as SidebarRef,
    );

    return (
      <>
        <GlobalStyles
          styles={{
            body: {
              [theme.breakpoints.up("sm")]: {
                [VAR_SIDEBAR_WIDTH]: isDesktopOpen
                  ? `${SIDEBAR_EXPANDED_WIDTH}px`
                  : `${SIDEBAR_COLLAPSED_WIDTH}px`,
                [VAR_SIDEBAR_REMAINING_WIDTH]: `calc(100vw - var(${VAR_SIDEBAR_WIDTH}))`,
              },

              [theme.breakpoints.down("sm")]: {
                [VAR_SIDEBAR_WIDTH]: isMobileOpen
                  ? `${SIDEBAR_EXPANDED_WIDTH}px`
                  : "0px",
                [VAR_SIDEBAR_REMAINING_WIDTH]: "100vw",
              },
            },
          }}
        />
        <Sheet
          {...otherProps}
          ref={ref}
          component="nav"
          sx={{
            position: "fixed",
            height: "100%",
            width: `var(${VAR_SIDEBAR_WIDTH})`,
            overflow: "auto",
            borderTop: 0,
            borderBottom: 0,
            borderLeft: 0,
            borderRadius: 0,
            borderRightWidth: 1,
            transition: "width 250ms",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: "modal",

            [`& .${listClasses.root}`]: {
              p: 0,
            },

            [`& .${listItemContentClasses.root}`]: {
              textWrap: "nowrap",
              overflowY: "hidden",
            },

            [`& .${listItemButtonClasses.root}`]: {
              p: 1,
              borderRight: 0,
              borderLeft: 4,
              borderLeftColor: "transparent",

              "&:first-of-type": {
                borderTop: 0,
              },
              "&:not(:last-of-type)": {
                borderBottom: 0,
              },

              "&:hover": {
                textDecoration: "none",
              },
              "&:focus-visible": {
                outline: "none !important",
                textDecoration: "underline",
              },
              [`&.${listItemButtonClasses.selected}`]: {
                color: "var(--joy-palette-primary-plainColor)",
                borderLeftColor: "var(--joy-palette-primary-plainColor)",
                bgcolor: "transparent",
              },

              "&.toggle-button": {
                borderBottom: 0,
              },
            },

            [`& .${listItemDecoratorClasses.root}`]: {},

            ["& .chevron"]: {
              fontSize: 20,
              transitionDuration: "250ms",
              transform: isOpen ? "rotate(0deg)" : "rotate(-180deg)",
            },

            ...otherProps.sx,
          }}
        >
          <List onClick={() => setMobileOpen(false)}>
            {children}
            <Box sx={{ flex: 1 }} />
            <ListItemButton
              variant="outlined"
              onClick={() => setDesktopOpen(!isDesktopOpen)}
              className="toggle-button"
            >
              <ListItemDecorator>
                <ChevronLeftIcon className="chevron" />
              </ListItemDecorator>
              <ListItemContent>Collapse</ListItemContent>
            </ListItemButton>
          </List>
        </Sheet>
        <Box
          className="backdrop"
          aria-hidden
          onClick={() => setMobileOpen(false)}
          sx={{
            position: "fixed",
            top: HEADER_HEIGHT,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "var(--joy-palette-background-backdrop)",
            backdropFilter: "blur(8px)",
            zIndex: (t) => t.zIndex.modal - 1,
            opacity: 1,
            display: isSmallScreen && isMobileOpen ? "block" : "none",
          }}
        />
      </>
    );
  },
) as SidebarComponent;

Sidebar.displayName = "Sidebar";
Sidebar.css = {
  remainingWidth: `var(${VAR_SIDEBAR_REMAINING_WIDTH})`,
  widthTransition: "width 250ms",
};
