import Section1Content from "./Section1Content";
import AlienImg from "./AlienImg";

import classes from "./Section1.module.css";

import Maskgroup from "../../../images/Maskgroup.png";

const Section1 = () => {
  return (
    <div className={classes.section_1}>
      <div className={classes.image}>
        <img src={Maskgroup} alt="Maskgroup-img"></img>
      </div>
      <div className={classes.content}>
        <Section1Content />
        <AlienImg />
      </div>
    </div>
  );
};

export default Section1;
