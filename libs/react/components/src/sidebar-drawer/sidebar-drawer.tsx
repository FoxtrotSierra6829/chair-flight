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
  useTheme,
} from "@mui/joy";
import { create } from "zustand";
import { HEADER_HEIGHT } from "../constants";
import { useMediaQuery } from "../hooks/use-media-query";
import type { SidebarDrawerListItemProps } from "./sidebar-drawer-list-item";
import type { SheetProps } from "@mui/joy";
import type { ReactElement } from "react";

export type SidebarDrawerProps = {
  children: ReactElement<SidebarDrawerListItemProps>[];
  sx?: SheetProps["sx"];
  className?: SheetProps["className"];
};

export type SidebarDrawerRef = HTMLDivElement & {
  toggleDrawer: () => void;
};

export type SidebarDrawerComponent = React.ForwardRefExoticComponent<
  SidebarDrawerProps & React.RefAttributes<SidebarDrawerRef>
> & {
  css: {
    remainingWidth: string;
    widthTransition: string;
  };
};

const VAR_SIDEBAR_WIDTH = "--joy-sidebar-drawer-width";
const VAR_SIDEBAR_REMAINING_WIDTH = "--joy-sidebar-drawer-remaining-width";
const SIDEBAR_EXPANDED_WIDTH = 240;
const SIDEBAR_COLLAPSED_WIDTH = 56;

const useSidebarDrawerStore = create<{
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

export const SidebarDrawer = forwardRef<HTMLDivElement, SidebarDrawerProps>(
  ({ children = [], ...otherProps }, ref) => {
    const { isMobileOpen, isDesktopOpen, setMobileOpen, setDesktopOpen } =
      useSidebarDrawerStore();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const isOpen = isSmallScreen ? isMobileOpen : isDesktopOpen;

    useImperativeHandle(
      ref,
      () =>
        ({
          toggleDrawer: () => setMobileOpen(!isMobileOpen),
        }) as SidebarDrawerRef,
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
            borderRightWidth: { xs: 0, sm: 1 },
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
              py: { xs: 1, sm: 2 },
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
            },

            ["& .chevron"]: {
              fontSize: 24,
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
) as SidebarDrawerComponent;

SidebarDrawer.displayName = "SidebarDrawer";
SidebarDrawer.css = {
  remainingWidth: `var(${VAR_SIDEBAR_REMAINING_WIDTH})`,
  widthTransition: "width 250ms",
};
