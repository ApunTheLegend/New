import classes from "./NavContent.module.css";

const NavContent = () => {
  return (
    <div className={classes.holder}>
      <ul>
        <li>Careers</li>
        <li>Xenodes</li>
        <li>Xenfi</li>
        <li>Xenopad</li>
        <li>Ecosystem</li>
      </ul>
    </div>
  );
};

export default NavContent;
