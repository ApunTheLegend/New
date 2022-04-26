import Section2Content from "./Section2Content";

import classes from "./Section2.module.css";

import Maskgroup2 from "../../../images/Maskgroup2.png";
import Maskgroup3 from "../../../images/Maskgroup3.png";
import group55 from "../../../images/group55.png";

const Section2 = () => {
  return (
    <div className={classes.section_2}>
      <div className={classes.image1}>
        <img src={Maskgroup2} alt="Maskgroup2-img"></img>
      </div>
      <div className={classes.image3}>
        <img src={Maskgroup3} alt="Maskgroup3-img"></img>
      </div>
      <div className={classes.content}>
        <Section2Content />
        <div className={classes.image2}>
          <img src={group55} alt="group55"></img>
        </div>
      </div>
    </div>
  );
};

export default Section2;
