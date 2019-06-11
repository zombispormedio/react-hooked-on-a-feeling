import React from "react";
import { Slide, Heading } from "spectacle";
import { CodeSandboxSlide } from "../components";

export function UseEffect() {
  return [
    <Slide>
      <Heading>useEffect</Heading>
    </Slide>,
    <CodeSandboxSlide>
      <iframe
        src="https://codesandbox.io/embed/fetch-pikachu-bc42n?fontsize=14&hidenavigation=1&autoresize=1"
        title="Classic useState"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
        style={{
          width: "92%",
          height: "55rem",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden"
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </CodeSandboxSlide>,
    <CodeSandboxSlide>
      <iframe
        src="https://codesandbox.io/embed/fetch-pokemon-p2xs9?fontsize=14&hidenavigation=1&autoresize=1"
        title="Classic useState"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
        style={{
          width: "92%",
          height: "55rem",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden"
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </CodeSandboxSlide>,
    <CodeSandboxSlide>
      <iframe
        src="https://codesandbox.io/embed/countdown-s2wb7?fontsize=14&hidenavigation=1&autoresize=1"
        title="Classic useState"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
        style={{
          width: "92%",
          height: "55rem",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden"
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </CodeSandboxSlide>,

    <CodeSandboxSlide>
      <iframe
        src="https://codesandbox.io/embed/countdown-with-input-using-key-iyvep?fontsize=14&hidenavigation=1&autoresize=1"
        title="Classic useState"
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
        style={{
          width: "92%",
          height: "55rem",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden"
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </CodeSandboxSlide>
  ];
}
