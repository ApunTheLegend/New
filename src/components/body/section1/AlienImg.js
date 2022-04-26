import classes from "./AlienImg.module.css";

import group1 from "../../../images/group1.png";
import group50 from "../../../images/group50.png";

const AlienImg = () => {
  return (
    <div className={classes.outer}>
      <img src={group1} alt="group1-img" className={classes.outer_img}></img>
      <div className={classes.inner}>
        <img
          src={group50}
          alt="group50-img"
          className={classes.inner_img}
        ></img>
      </div>
    </div>
  );
};

export default AlienImg;
