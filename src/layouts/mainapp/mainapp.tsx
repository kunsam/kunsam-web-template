import "./mainapp.scss";
import Head from "next/head";
import React, { Component } from "react";
import { Theme, withStyles, createStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    }
  });

export class MainAppLayout extends Component<any, any> {
  render() {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(MainAppLayout);
