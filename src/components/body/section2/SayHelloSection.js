import classes from "./SayHelloSection.module.css";

const SayHelloSection = () => {
  return (
    <div className={classes.hello_section}>
      <h1 className={classes.h4}>
        Say <span className={classes.hello}>Hello</span>
      </h1>
      <p className={classes.p}>
        One. is the fastest blockchain in the world and the fastest growing
        ecosystem in crypto, with thousands of projects spanning DeFi, NFTs,
        Web3 and more.
      </p>
    </div>
  );
};

export default SayHelloSection;
