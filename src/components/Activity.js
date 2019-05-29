import React from "react";
import styled from "styled-components";
import { formatDistance } from "date-fns";
import { useActivity } from "../hooks";

const ActivityList = styled.ul`
  list-style: none;
  height: 20rem;
  position: relative;
  overflow-y: auto;
  background-color: white;
  border: 3px dashed black;
`;

export const ActivityPlayground = () => {
  const { activity } = useActivity();
  return (
    <ActivityList>
      {activity.map(({ at, message }) => (
        <li key={at.toISOString()}>
          {formatDistance(new Date(), at)} - {message}
        </li>
      ))}
    </ActivityList>
  );
};
