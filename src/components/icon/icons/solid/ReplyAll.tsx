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
      d="M7 5v3l-4 4 4 4v3l-7-7 7-7Zm6 0v4c7 1 10 6 11 11-2.5-3.5-6-5.1-11-5.1V19l-7-7 7-7Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
