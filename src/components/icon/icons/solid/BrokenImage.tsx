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
      d="M21 11.59V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4.58l3 3.01 4-4 4 4 4-4.01 3 3.01Zm0 2.84-3-3.01-4 3.99-4-4-4 4-3-2.99V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4.57Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
