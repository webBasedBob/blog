import React from "react";

const EnterFromSides = ({ children }) => {
  if (children.length !== 2) {
    throw new Error(
      "For this animation to work, an exact number of 2 children must be passed"
    );
  }
  return <></>;
};

export default EnterFromSides;
