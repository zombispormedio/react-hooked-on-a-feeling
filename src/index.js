import React from "react";
import ReactDOM from "react-dom";
import { Deck, Slide, Heading, Text, Notes } from "spectacle";
import { CountDown } from "./components";

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500}>
    <Slide transition={["zoom"]}>
      <Heading>React Hooked On A Feeling</Heading>
      <Text>Welcome</Text>
      <Notes>Notes</Notes>
    </Slide>
    <Slide transition={["zoom"]}>
      <Heading>CountDown</Heading>
      <Text>
        <CountDown />
      </Text>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
