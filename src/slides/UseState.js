import React from "react";
import { Slide, Heading } from "spectacle";
import { CodeSandboxSlide } from "../components";

export function UseState() {
  return [
    <Slide>
      <Heading>useState</Heading>
    </Slide>,
    <CodeSandboxSlide>
      <iframe
        src="https://codesandbox.io/embed/classic-usestate-fsvc3?fontsize=14&hidenavigation=1&autoresize=1"
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
        src="https://codesandbox.io/embed/comic-books-wishlist-zmlb9?fontsize=14&hidenavigation=1&autoresize=1"
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
        src="https://codesandbox.io/embed/comic-books-wishlist-with-usereducer-ur0sz?fontsize=14&hidenavigation=1&autoresize=1"
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
    <Slide>
      <Heading>useState es, en realidad, useReducer</Heading>
    </Slide>
  ];
}
