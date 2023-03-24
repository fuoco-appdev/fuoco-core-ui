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
      d="M2 8V6h20v2H2Zm0 3v2h20v-2H2Zm0 5v2h20v-2H2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
