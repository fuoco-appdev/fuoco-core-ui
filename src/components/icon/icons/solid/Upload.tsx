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
      d="M15 10v6H9v-6H5l7-7 7 7h-4Zm4 10v-2H5v2h14Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
