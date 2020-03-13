import "./appbar.scss";
import AppDrawer from "./app_drawer";
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { CssBaseline } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles, createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    }
  });

class AppbarLayoutComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    };
  }
  _toggleDrawer = (open: boolean) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ openDrawer: open });
  };

  render() {
    const { openDrawer } = this.state;
    const {
      title,
      date,
      classes,
      RightButton,
      LeftButton,
      titleStyle = {},
      containerStyle = {}
    } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <div style={{ width: "100%" }}>
          <AppBar
            position="fixed"
            style={{
              height: 64,
              boxShadow: "none",
              backgroundColor: "rgba(0, 0, 0, 0)"
            }}
          >
            <Toolbar
              style={{
                justifyContent: "center"
              }}
            >
              {LeftButton ? (
                <LeftButton />
              ) : (
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  style={{
                    position: "absolute",
                    left: 10
                  }}
                  onClick={this._toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <AppDrawer
                openDrawer={openDrawer}
                toggleDrawer={this._toggleDrawer}
              />

              {title && (
                <Typography
                  noWrap
                  variant="h6"
                  color="inherit"
                  style={titleStyle}
                >
                  {title}
                </Typography>
              )}

              {date && <h3 className="title-date">{date}</h3>}

              {RightButton && <RightButton />}
            </Toolbar>
          </AppBar>
        </div>
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            paddingTop: 65,
            ...containerStyle
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

const AppbarLayout = withStyles(styles)(AppbarLayoutComponent);

export default AppbarLayout;
