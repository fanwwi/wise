import React from "react";
import History from "../sections/History/History";
import Mission from "../sections/Mission/Mission";
import Value from "../sections/Value/Value";
import TrustBar from "../sections/TrustBar/TrustBar";
import Proof from "../sections/Proof/Proof";

const About = () => {
  return (
    <div>
      <History />
      <Mission />
      <Proof />
      <TrustBar />
      <Value />
    </div>
  );
};

export default About;
