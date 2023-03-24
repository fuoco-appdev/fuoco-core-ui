import * as React from "react";

const Icon = ({ size = 46, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11 8H7.5L12 3.5 16.5 8H13v6.41l-6 6L5.59 19 11 13.59V8Zm7.41 11L17 20.41 13.59 17 15 15.59 18.41 19Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
