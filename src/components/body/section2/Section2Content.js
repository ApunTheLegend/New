import BlurSection from "./BlurSection";
import SayHelloSection from "./SayHelloSection";

import classes from "./Section2Content.module.css";

const Section2Content = () => {
  return (
    <div className={classes.section2_content}>
      <h1 className={classes.h1}>
        Pushing Blockchain Development To New Heights
      </h1>
      <BlurSection />
      <SayHelloSection />
    </div>
  );
};

export default Section2Content;
