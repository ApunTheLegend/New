import classes from "./SeparatedDivs.module.css";

const SeparatedDivs = (props) => {
  return (
    <div className={classes.separated}>
      <img src={props.url} alt={props.text} />
    </div>
  );
};

export default SeparatedDivs;
