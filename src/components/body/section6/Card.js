import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <h4 className={classes.card_h4}>{props.heading}</h4>
      <p className={classes.card_p}>
        {props.text}
      </p>
      <img className={classes.top_left_img} src={props.topRightImage} alt="top-left" />
      <img className={classes.bottom_img} src={props.bottomImage} alt="bottom" />
    </div>
  );
};

export default Card;
