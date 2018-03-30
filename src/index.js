import React from "react";
import { render } from "react-dom";
import injectSheet, { jss, ThemeProvider } from "react-jss";

console.log(jss.version);
console.log("adam li yeah!");

const styles = theme => ({
  flexBoxWrap: {
    display: "flex"
  },
  wrapper: {
    padding: 40,
    textAlign: "center"
  },
  wrapper1: {
    extend: "wrapper",
    background: theme.background1
  },
  wrapper2: {
    extend: "wrapper",
    background: theme.background2
  },
  wrapper3: {
    extend: "wrapper",
    background: theme.background3
  },
  title: {
    font: {
      size: 40,
      weight: 900
    },
    color: theme.color
  },
  link: {
    color: theme.color,
    "&:hover": {
      opacity: 0.5
    }
  }
});

const Adam = ({ classes }) => (
  <div className={classes.flexBoxWrap}>
    <div className={classes.wrapper1}>
      <h2 className={classes.title}>flex box 1</h2>
    </div>
    <div className={classes.wrapper2}>
      <h2 className={classes.title}>flex box 2</h2>
    </div>
    <div className={classes.wrapper3}>
      <p>
        flex box 3, but its a whole bunch of text Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
        sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>
);

const StyledAdam = injectSheet(styles)(Adam);

const theme = {
  background1: "#b942f4",
  background2: "#f49e42",
  background3: "#0fd873",
  color: "#0f5faf"
};

const App = () => (
  <ThemeProvider theme={theme}>
    <StyledAdam />
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
