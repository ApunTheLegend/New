import Button from "../../../UI/Button";

import classes from "./ButtonSection.module.css";

const ButtonSection = () => {
  return <div>
      <Button className={classes.start_building}>Start Building</Button>
      <Button className={classes.read_docs}>Read Docs</Button>
  </div>;
};

export default ButtonSection;
