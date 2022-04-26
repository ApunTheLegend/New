import Card from "./Card";
import classes from "./Section6.module.css";

import group24 from "../../../images/group24.png";
import group2 from "../../../images/group2.png";
import group46 from "../../../images/group46.png";
import Xenode from "../../../images/Xenode.png";
import Xenfi from "../../../images/Xenfi.png";
import Xenopad from "../../../images/Xenopad.png";

const Section6 = () => {
  return (
    <div className={classes.container}>
      <Card
        heading="Xenodes"
        text="It is a long established fact that
a reader will be distracted by the
readable content of a page."
        topRightImage={group24}
        bottomImage={Xenode}
      />
      <Card
        heading="Xenfi"
        text="It is a long established fact that
a reader will be distracted by the
readable content of a page."
        topRightImage={group2}
        bottomImage={Xenfi}
      />
      <Card
        heading="Xenopad"
        text="It is a long established fact that
a reader will be distracted by the
readable content of a page."
        topRightImage={group46}
        bottomImage={Xenopad}
      />
    </div>
  );
};

export default Section6;
