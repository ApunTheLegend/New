import ListItemsLeft from "./ListItemsLeft";
import ListItemsRight from "./ListItemsRight";

import classes from "./Footer.module.css";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <ListItemsLeft />
      <CopyRight />
      <ListItemsRight />
    </footer>
  );
};

export default Footer;
