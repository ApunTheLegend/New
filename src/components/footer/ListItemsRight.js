import classes from "./ListItems.module.css";

const ListItemsRight = () => {
  return (
    <ul className={classes.list}>
      <li>Network stats</li>
      <li>Disclaimer</li>
      <li>Privacy Policy</li>
      <li>Terms of use</li>
    </ul>
  );
};

export default ListItemsRight;
