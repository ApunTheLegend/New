import classes from "./BlurSection.module.css";

import play from "../../../images/play.png";
import rectangle15 from "../../../images/rectangle15.png";

const BlurSection = () => {
  return (
    <div className={classes.blur}>
      <div className={classes.playHolder}>
        <img src={rectangle15} alt="rectangle15" />
        <img className={classes.play} src={play} alt="play" />
      </div>
    </div>
  );
};

export default BlurSection;
