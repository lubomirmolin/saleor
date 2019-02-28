import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import * as React from "react";
import { drawerWidth, navigationBarHeight } from "./consts";

const styles = (theme: Theme) =>
  createStyles({
    drawerDesktop: {
      backgroundColor: "transparent",
      borderRight: "0 none",
      height: `calc(100vh - ${navigationBarHeight + theme.spacing.unit * 2}px)`,
      marginTop: navigationBarHeight + theme.spacing.unit * 2,
      position: "fixed" as "fixed",
      width: drawerWidth
    },
    drawerMobile: {
      width: drawerWidth
    }
  });

interface ResponsiveDrawerProps extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  open: boolean;
  onClose?();
}

const ResponsiveDrawer = withStyles(styles, { name: "ResponsiveDrawer" })(
  ({ children, classes, onClose, open }: ResponsiveDrawerProps) => (
    <>
      <Hidden smDown>
        <Drawer
          variant="persistent"
          open
          classes={{
            paper: classes.drawerDesktop
          }}
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          onClose={onClose}
          open={open}
          classes={{ paper: classes.drawerMobile }}
        >
          {children}
        </Drawer>
      </Hidden>
    </>
  )
);
export default ResponsiveDrawer;
