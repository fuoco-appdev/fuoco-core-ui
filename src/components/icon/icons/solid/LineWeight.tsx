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
      d="M3 8V4h18v4H3Zm0 5h18v-3H3v3Zm18 4H3v-2h18v2Zm0 3H3v-1h18v1Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
