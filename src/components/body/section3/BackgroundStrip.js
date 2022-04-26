import classes from "./BackgroundStrip.module.css";

import group11 from "../../../images/group11.png";
import group47 from "../../../images/group47.png";
import group48 from "../../../images/group48.png";
import group49 from "../../../images/group49.png";
import SeparatedDivs from "./SeparatedDivs";

const BackgroundStrip = () => {
  return (
    <div className={classes.strip}>
      <SeparatedDivs url={group47} text={"group47"} />
      <SeparatedDivs url={group48} text={"group48"} />
      <SeparatedDivs url={group49} text={"group49"} />
      <h3>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </h3>
      <img src={group11} alt="background-strip" />
    </div>
  );
};

export default BackgroundStrip;
