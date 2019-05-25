import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CountDownContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5em;
  font-family: Open Sans Condensed;
`;

export const CountDown = ({ days, hours, minutes, seconds }) => (
  <CountDownContainer>
    {days}d {hours}h {minutes}m {seconds}s
  </CountDownContainer>
);

CountDown.propTypes = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
};
