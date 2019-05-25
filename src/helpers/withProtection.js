import React, { useEffect } from "react";
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

export const withProtection = ({ skip, options }) => TargetComponent => {
  if (skip) return TargetComponent;
  const ProtectedTargetComponent = props => {
    const { forbidden, countdown } = useProtection(options);
    return forbidden ? (
      <CountDown {...countdown} />
    ) : (
      <TargetComponent {...props} />
    );
  };
  ProtectedTargetComponent.displayName = `withProtection(${
    TargetComponent.displayName
  })`;
  return ProtectedTargetComponent;
};
