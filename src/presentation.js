import React from "react";
import { Deck, Slide, Heading } from "spectacle";
import { withProtection } from "./helpers";
import {
  SpeechPlayground,
  PainterPlayground,
  ActivityPlayground,
  EffectPlayground
} from "./components";
import { useActivity, withActivity } from "./hooks";

const Presentation = () => {
  const { notify } = useActivity();
  return (
    <Deck transition={["zoom", "slide"]} transitionDuration={500}>
      <Slide
        transition={["zoom"]}
        onActive={() => {
          notify(`Viewing first slide`);
        }}
      >
        <Heading>React Hooked On A Feeling</Heading>
      </Slide>
      <Slide
        onActive={() => {
          notify(`Viewing Speech Recognition slide`);
        }}
      >
        <Heading>useSpeechRecognition</Heading>
        <SpeechPlayground />
      </Slide>
      <Slide
        onActive={() => {
          notify(`Viewing Painter slide`);
        }}
      >
        <Heading>Tha Painter</Heading>
        <PainterPlayground />
      </Slide>
      <Slide
        onActive={() => {
          notify(`Viewing Activity slide`);
        }}
      >
        <Heading>useActivity</Heading>
        <ActivityPlayground />
      </Slide>
      <Slide
        onActive={() => {
          notify(`Viewing useEffect slide`);
        }}
      >
        <Heading>useEffect</Heading>
        <EffectPlayground />
      </Slide>
    </Deck>
  );
};

export default withProtection({
  // skip: process.env.NODE_ENV === "development",
  options: {
    deadline: "2019-06-13 19:00",
    password: [86, 73, 82, 85, 83]
  }
})(withActivity(Presentation));
