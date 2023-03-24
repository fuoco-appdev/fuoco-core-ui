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
      d="M2.5 7V4h13v3h-5v12h-3V7h-5Zm10 2h9v3h-3v7h-3v-7h-3V9Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
