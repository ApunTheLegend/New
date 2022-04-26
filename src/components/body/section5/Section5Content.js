import classes from "./Section5Content.module.css";

const Section5Content = () => {
  return (
    <div className={classes.section5_content}>
      <h1 className={classes.h1}>Adaptive Ecosystem</h1>
      <h3 className={classes.h3}>
        Integrate once and never worry about scaling again. One ensures
        composability between ecosystem projects by maintaining a single global
        state as the network scales. Never deal with fragmented Layer 2 systems
        or sharded chains.
      </h3>
    </div>
  );
};

export default Section5Content;
