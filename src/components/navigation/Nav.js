import Logo from "./Logo";
import NavContent from "./NavContent";

import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.navdiv}>
      <Logo />
      <NavContent />
    </nav>
  );
};

export default Nav;
