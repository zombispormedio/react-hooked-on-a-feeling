import React from "react";
import { Deck, Slide, Heading, Notes } from "spectacle";
import { CountDown } from "./components";

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500}>
    <Slide transition={["zoom"]}>
      <Heading>
        <CountDown />
      </Heading>
      <Notes>Are you ready?</Notes>
    </Slide>
  </Deck>
);

export default Presentation;
