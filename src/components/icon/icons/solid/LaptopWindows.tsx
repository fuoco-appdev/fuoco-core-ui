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
      d="M20 17v1h4v2H0v-2h4v-1c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2l-.01 10c0 1.1-.89 2-1.99 2Zm0-12H4v10h16V5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
