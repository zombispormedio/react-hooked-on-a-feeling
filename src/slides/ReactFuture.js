import React from "react";
import { Slide, Heading } from "spectacle";
import { CodeSandboxSlide, CodeSandboxIframe, Goo } from "../components";

export function ReactFuture() {
  return [
    <Slide bgColor="secondary">
      <Goo />
      <Heading style={{ zIndex: 10, position: "absolute" }}>
        El futuro de React
      </Heading>
    </Slide>,
    <CodeSandboxSlide>
      <CodeSandboxIframe
        src="https://codesandbox.io/embed/react-hooks-in-libraries-react-spring-qsw6f?fontsize=14&hidenavigation=1&autoresize=1"
        title="Painter"
      />
    </CodeSandboxSlide>
  ];
}
