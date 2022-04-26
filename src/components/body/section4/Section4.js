import classes from "./Section4.module.css";

import group25 from "../../../images/group25.png";
import Section4Content from "./Section4Content";

const Section4 = () => {
  return (
    <div className={classes.big_holder}>
      <img src={group25} alt="group25" />
      <Section4Content />
    </div>
  );
};

export default Section4;
