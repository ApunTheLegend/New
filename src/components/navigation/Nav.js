import Logo from "./Logo";
import NavContent from "./NavContent";

import classes from "./Nav.module.css";

import group9 from "../../images/group9.png";
import hero_gradient_1 from "../../images/hero_gradient_1.png";

const Nav = () => {
  return (
    <nav className={classes.navdiv}>
      <img src={group9} alt="group9" className={classes.top_left} />
      <img
        src={hero_gradient_1}
        alt="hero-gradient-1"
        className={classes.top_right}
      />
      <Logo />
      <NavContent />
    </nav>
  );
};

export default Nav;
