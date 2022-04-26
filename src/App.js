import { Fragment } from "react";
import "./App.css";

import Section1 from "./components/body/section1/Section1";
import Section2 from "./components/body/section2/Section2";
import Nav from "./components/navigation/Nav";

function App() {
  return (
    <Fragment>
      <Nav />
      <Section1 />
      <Section2 />
    </Fragment>
  );
}

export default App;
