import Circle from "./Circle";

import classes from "./Card2.module.css";

const Card2 = (props) => {
  return (
    <div className={classes.card2}>
      <Circle circleText={props.circleText} />
      <h4 className={classes.card2_h4}>{props.heading}</h4>
    </div>
  );
};

export default Card2;
