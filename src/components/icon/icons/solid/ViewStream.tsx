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
      d="M4 11V5h17v6H4Zm17 7H4v-6h17v6Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Icon;
