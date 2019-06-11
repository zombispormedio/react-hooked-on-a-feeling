import React from "react";
import { Slide, Heading, Notes } from "spectacle";
import {
  CodeSandboxSlide,
  HugeCodePane,
  CodeSandboxIframe
} from "../components";

export function UseImperativeHandle() {
  return [
    <Slide>
      <Heading>useImperativeHandle</Heading>
      <HugeCodePane
        lang="jsx"
        margin="4rem"
        source={require("../examples/use_imperative.txt").default}
      />
      <Notes>
        Los Forwarding Refs es una técnica para pasar un ref a sus hijos. El
        useImperativeHandle permite exponer una api determinada, que el ref esté
        compuesto por una serie de métodos como si fuese una clase.
      </Notes>
    </Slide>,
    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/painter-lxrnf?fontsize=14&hidenavigation=1&autoresize=1"
        title="Painter"
      />
    </CodeSandboxSlide>
  ];
}
