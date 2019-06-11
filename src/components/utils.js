import React from "react";
import { CodePane, Fill, Slide } from "spectacle";
import styled from "styled-components";
import withProps from "recompose/withProps";

export const Row = styled.div`
  display: flex;
  max-height: 10rem;
  align-items: center;
  justify-content: center;
`;

export const HugeCodePane = withProps({ theme: "external" })(styled(CodePane)`
  font-size: 1.5rem !important;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 20px 68px;
  border-radius: 5px;
  .prism-code {
    padding: 2rem !important;
    max-height: 50rem;
    overflow-y: auto;
  }
`);

export const LeftCodePane = styled(HugeCodePane)`
  width: 47rem;
`;

export const RightCodePane = styled(HugeCodePane)`
  width: 45rem;
`;

export const LeftCodeFill = styled(Fill)`
  transform: ${props =>
    props.dense ? ` translate(-10rem,-4rem);` : `translateX(-10rem)`};
`;

export const RightCodeFill = styled(Fill)`
  transform: ${props =>
    props.dense ? ` translate(-3rem,-4rem);` : `translateX(-3rem)`};
`;

export const CodeSandboxSlide = styled(Slide)`
  max-height: inherit !important;
  max-width: inherit !important;
  iframe {
    width: 93%;
    height: 55rem;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
  }
`;

export const CodeSandboxIframe = props => (
  <iframe
    title="sample"
    allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    {...props}
  />
);
