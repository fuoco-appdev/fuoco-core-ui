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
      d="M20 9H4v2h16V9Zm-6 4H4v2h10v-2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
