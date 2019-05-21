import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Deck, Slide, Heading, Notes } from "spectacle";
import { useCountDown, useSecretCode } from "./hooks";

const countDownProps = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
};

const CountDownHeading = ({ days, hours, minutes, seconds }) => (
  <Heading>
    {days}d {hours}h {minutes}m {seconds}s
  </Heading>
);

CountDownHeading.propTypes = countDownProps;

const ForbiddenPresentation = ({ countdown }) => (
  <Deck>
    <Slide>
      <CountDownHeading {...countdown} />
      <Notes>Are you ready?</Notes>
    </Slide>
  </Deck>
);
ForbiddenPresentation.propTypes = {
  countdown: PropTypes.shape(countDownProps).isRequired
};

const RealPresentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500}>
    <Slide transition={["zoom"]}>
      <Heading>React Hooked On A Feeling</Heading>
    </Slide>
  </Deck>
);

const useForbidden = () => {
  const { expired, cancel: cancelCountDown, ...countdown } = useCountDown(
    process.env.TALK_AT
  );
  const { achieved, cancel: cancelSecretCode } = useSecretCode([
    86,
    73,
    82,
    85,
    83
  ]);
  useEffect(() => {
    if (achieved) cancelCountDown();
    if (expired) cancelSecretCode();
  }, [achieved, expired]);

  return {
    forbidden: !expired && !achieved,
    countdown
  };
};

const Presentation = () => {
  const { forbidden, countdown } = useForbidden();
  return forbidden ? (
    <ForbiddenPresentation countdown={countdown} />
  ) : (
    <RealPresentation />
  );
};

export default Presentation;
