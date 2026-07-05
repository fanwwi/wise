import React from "react";
import Stories from "../sections/Stories/Stories";
import CaseQuiz from "../sections/CaseQuiz/CaseQuiz";
import Partners from "../ui/Partners/Partners";
import FinalQuoteBlock from "../sections/FinalQuoteBlock/FinalQuoteBlock";

const BottomSection = () => {
  return (
    <div>
      <Stories />
      <CaseQuiz />
      <Partners />
      <FinalQuoteBlock />
    </div>
  );
};

export default BottomSection;
