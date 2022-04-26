import Card2 from "./Card2";
import classes from "./Section7.module.css";

const Section7 = () => {
  return (
    <div className={classes.container2}>
      <Card2 heading="Xenon Community" circleText="Learn More" />
      <Card2 heading="Node &amp; Validator Services" circleText="Get Started" />
      <Card2 heading="Careers For The Future" circleText="Start Building" />
    </div>
  );
};

export default Section7;
