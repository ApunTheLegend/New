import { Fragment } from "react";
import "./App.css";

import Section1 from "./components/body/section1/Section1";
import Section2 from "./components/body/section2/Section2";
import Section3 from "./components/body/section3/Section3";
import Section4 from "./components/body/section4/Section4";
import Section5 from "./components/body/section5/Section5";
import Section6 from "./components/body/section6/Section6";
import Section7 from "./components/body/section7/Section7";
import Footer from "./components/footer/Footer";
import Nav from "./components/navigation/Nav";

function App() {
  return (
    <Fragment>
      <Nav />
      <Section1 />
      <Section3 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </Fragment>
  );
}

export default App;
