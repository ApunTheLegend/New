import ButtonSection from "./ButtonSection";

import classes from "./Section1Content.module.css";

const Section1Content = () => {
  return (
    <div className={classes.section1_content}>
      <h1 className={classes.h1}>
        Providing Blockchain Solutions Enabling Worldwide Adoption
      </h1>
      <h3 className={classes.h3}>
        It is a long established fact that a reader will be distract.
      </h3>
      <ButtonSection />
    </div>
  );
};

export default Section1Content;
