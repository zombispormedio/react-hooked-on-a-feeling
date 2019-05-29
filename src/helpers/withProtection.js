import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useCountDown, useSecretCode } from "../hooks";
import { CountDown } from "../components";

const useProtection = ({ deadline, password }) => {
  const { expired, cancel: cancelCountDown, ...countdown } = useCountDown(
    deadline
  );
  const { achieved, cancel: cancelSecretCode } = useSecretCode(password);
  useEffect(() => {
    if (achieved) cancelCountDown();
    if (expired) cancelSecretCode();
  }, [achieved, expired]);

  return {
    forbidden: !expired && !achieved,
    countdown
  };
};

const ForbiddenZone = ({ countdown }) => {
  return <CountDown {...countdown} />;
};

ForbiddenZone.propTypes = {
  countdown: PropTypes.shape({
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number
  }).isRequired
};

export const withProtection = ({ skip, options }) => TargetComponent => {
  if (skip) return TargetComponent;
  const ProtectedTargetComponent = props => {
    const { forbidden, countdown } = useProtection(options);
    return forbidden ? (
      <ForbiddenZone countdown={countdown} />
    ) : (
      <TargetComponent {...props} />
    );
  };
  ProtectedTargetComponent.displayName = `withProtection(${TargetComponent.displayName ||
    TargetComponent.name})`;
  return ProtectedTargetComponent;
};
