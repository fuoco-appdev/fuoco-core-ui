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
      d="M4 7V5h16v2H4Zm0 2h16v2H4V9Zm0 8h10v2H4v-2Zm0-2h16v-2H4v2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
