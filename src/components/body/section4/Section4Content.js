import { Fragment } from "react";

import classes from "./Section4Content.module.css";

const Section4Content = () => {
  return (
    <Fragment>
      <div className={classes.lefttext}>
        <h1>Amplifying Blockchain Infrastructure To The Masses</h1>
      </div>
      <div className={classes.righttext}>
        <p>
          Not only is One ultra-fast and low cost, it is censorship resistant.
          Meaning, the network will remain open for applications to run freely
          and transactions will never be stopped.
        </p>
      </div>
    </Fragment>
  );
};

export default Section4Content;
