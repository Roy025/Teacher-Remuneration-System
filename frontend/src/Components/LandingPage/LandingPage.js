import React from "react";
import PageBlock from "./PageBlock";
import {homeBlockOne, homeBlockTwo, homeBlockThree} from "./LandingPageData"

function LandingPage() {
  return (
    <>
      <PageBlock {...homeBlockOne} />
      <PageBlock {...homeBlockTwo} />
      <PageBlock {...homeBlockThree} />
    </>
  );
}

export default LandingPage;
