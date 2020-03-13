import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/People";
import { withRouter, Router } from "next/router";

class AppDrawerComponent extends Component<any, any> {
  handleClickItem = (key: string, index: number) => {
    const { router, pathname } = this.props;
    switch (key) {
      case "精选诗集": {
        if (pathname !== "/") {
          router.push("/");
        }
        break;
      }
      case "我的诗集": {
        if (pathname !== "/my_poem") {
          router.push("/my_poem");
        }
        break;
      }
      case "关于作者": {
        if (pathname !== "/about") {
          router.push("/about");
        }
        break;
      }
    }
  };

  render() {
    const { openDrawer, toggleDrawer } = this.props;
    return (
      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          style={{ width: 200 }}
        >
          <List>
            {["精选诗集"].map((text, index) => (
              <div
                key={text}
                onClick={e => {
                  this.handleClickItem(text, index);
                  toggleDrawer(false)(e);
                }}
              >
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </div>
            ))}
          </List>
          <Divider />
          <List>
            {["我的诗集", "关于作者"].map((text, index) => (
              <div
                key={text}
                onClick={e => {
                  this.handleClickItem(text, index);
                  toggleDrawer(false)(e);
                }}
              >
                <ListItem button key={text}>
                  <ListItemIcon>
                    <MailIcon></MailIcon>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    );
  }
}

const AppDrawer = withRouter(AppDrawerComponent);

export default AppDrawer;
