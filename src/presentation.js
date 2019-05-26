import React from "react";
import { Deck, Slide, Heading } from "spectacle";
import { withProtection } from "./helpers";
import { SpeechPlayground, PainterPlayground } from "./components";

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500}>
    <Slide transition={["zoom"]}>
      <Heading>React Hooked On A Feeling</Heading>
    </Slide>
    <Slide>
      <Heading>useSpeechRecognition</Heading>
      <SpeechPlayground />
    </Slide>
    <Slide>
      <Heading>ThePainter</Heading>
      <PainterPlayground />
    </Slide>
  </Deck>
);

export default withProtection({
  skip: process.env.NODE_ENV === "development",
  options: {
    deadline: "2019-06-11 19:00",
    password: [86, 73, 82, 85, 83]
  }
})(Presentation);
