import classes from "./Circle.module.css";

const Circle = (props) => {
  return (
    <div className={classes.circle}>
      <p>{props.circleText}</p>
    </div>
  );
};

export default Circle;
