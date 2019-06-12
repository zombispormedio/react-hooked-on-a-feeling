import React from "react";
import { Slide, Heading } from "spectacle";
import {
  SpeechPlayground,
  CodeSandboxSlide,
  CodeSandboxIframe
} from "../components";

export function CustomHooks() {
  return [
    <Slide>
      <Heading>Custom Hooks</Heading>
    </Slide>,
    <Slide bgColor="white" progressColor="black" controlColor="black">
      <SpeechPlayground />
    </Slide>,
    <Slide>
      <CodeSandboxSlide>
        <CodeSandboxIframe
          src="https://codesandbox.io/embed/super-combination-oo7hz?fontsize=14&hidenavigation=1&autoresize=1&module=%2Fsrc%2Fhooks.js"
          title="Combination"
        />
      </CodeSandboxSlide>
    </Slide>
  ];
}
