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
      d="M5 4v3h5v3h4V7h5V4H5Zm5 15h4v-3h-4v3Zm11-5H3v-2h18v2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
