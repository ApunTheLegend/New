import classes from "./Logo.module.css";

import group54 from '../../images/group54.png'

const Logo = () => {
  return <div className={classes.logo}>
    <img src={group54} alt="group-54-img" />
  </div>;
};

export default Logo;
