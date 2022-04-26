import classes from "./Section5.module.css";

import group from "../../../images/group.png";
import Section5Content from "./Section5Content";

const Section5 = () => {
  return (
    <div className={classes.holder}>
      <img src={group} alt="group" />
      <Section5Content />
    </div>
  );
};

export default Section5;
