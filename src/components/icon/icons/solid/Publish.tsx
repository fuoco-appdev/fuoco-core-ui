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
      d="M5 6V4h14v2H5Zm4 8H5l7-7 7 7h-4v6H9v-6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
